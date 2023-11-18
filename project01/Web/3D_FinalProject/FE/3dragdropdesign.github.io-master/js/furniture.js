
var furnituresSelectObject = [];

var container;
var camera;
var controls;
var renderer;
var collisionConfiguration;
var dispatcher;
var broadphase;
var solver;
var physicsWorld;
var scene;
var light;
var cameraDefault;

var clock = new THREE.Clock();
var pos = new THREE.Vector3();
var quat = new THREE.Quaternion();
var textureLoader = new THREE.TextureLoader();
var softBodies = [];
var gravityConstant = -9.8;
var margin = 0.05;
var objects = [];

var shiftClick = false;

initGraphics();
initPhysics();
createObjects();

animate();

function initGraphics(){
	container = document.getElementById("container");

	//CAMERA
	camera =new THREE.PerspectiveCamera(60, 1366/768, 0.2, 2000);
	camera.position.x = 0;
	camera.position.y = 40;
	camera.position.z = 33;

	controls = new THREE.OrbitControls(camera);
	controls.target.y = 2;

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xbfd1e5);
	renderer.setPixelRatio(1);
	renderer.setSize(1366, 768);
	renderer.shadowMap.enabled =  false;

	//LIGHT
	var ambientLight = new THREE.AmbientLight(0x404040);
	light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(-17, 20, 5);
	light.castShadow = true;
	light.color = {r: 0.85, g: 0.85, b: 0.85}

	var d = 20;
	light.shadow.camera.left = -d;
	light.shadow.camera.right = d;
	light.shadow.camera.top = d;
	light.shadow.camera.bottom = -d;

	light.shadow.camera.near = 2;
	light.shadow.camera.far = 50;

	light.shadow.mapSize.x = 1024;
	light.shadow.mapSize.y = 1024;

	scene = new THREE.Scene();
	scene.add(ambientLight);
	scene.add(light);
	/*
	var dragControls = new THREE.DragControls( objects, camera, renderer.domElement, scene );
	dragControls.addEventListener( 'dragstart', function ( event ) { controls.enabled = false; } );
	dragControls.addEventListener( 'dragend', function ( event ) { controls.enabled = true; } );	
	*/	

	container.innerHTML = "";
	container.appendChild(renderer.domElement);

	var dragControls = new THREE.DragControls( furnituresSelectObject, camera, renderer.domElement );
	dragControls.addEventListener( 'dragstart', function ( event ) { controls.enabled = false; } );
	dragControls.addEventListener( 'dragend', function ( event ) { controls.enabled = true; } );
}

function initPhysics(){
	collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
	dispatcher = new Ammo.btCollisionDispatcher( collisionConfiguration );
	broadphase = new Ammo.btDbvtBroadphase();
	solver = new Ammo.btSequentialImpulseConstraintSolver();
	softBodySolver = new Ammo.btDefaultSoftBodySolver();
	physicsWorld = new Ammo.btSoftRigidDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration, softBodySolver);
	physicsWorld.setGravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );
	physicsWorld.getWorldInfo().set_m_gravity( new Ammo.btVector3( 0, gravityConstant, 0 ) );
}
function animate(){
	requestAnimationFrame(animate);
	render();
}
function render(){
	var deltaTime = clock.getDelta();
	controls.update(deltaTime);
	renderer.render(scene, camera);
}
function createObjects(){
	pos.set(0, -0.5, 0);
	quat.set(0, 0, 0, 1);
	var ground = createParalellepiped(40, 0.05, 40, 0, pos, quat, new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ));
	ground.castShadow = true;
	ground.receiveShadow = true;
	textureLoader.load("3D/img/grid.png", function(texture){
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(40, 40);
		ground.material.map = texture;
		ground.material.needsUpdate = true;
	});
}
function createParalellepiped(sx, sy, sz, mass, pos, quat, material){
	var threeObject = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz, 1, 1, 1), material);
	var shape = new Ammo.btBoxShape(new Ammo.btVector3(sx*0.5, sy*0.5, sz*0.5));
	shape.setMargin(margin);
	createRigiBody(threeObject, shape, mass, pos, quat);
	return threeObject;
}
function createRigiBody(threeObject, shape, mass, poss, quat){
	threeObject.position.copy(pos);
	threeObject.position.copy(quat);

	var transform = new Ammo.btTransform();
	transform.setIdentity();
	transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
	transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
	var motionState = new Ammo.btDefaultMotionState( transform );
	var localInertia = new Ammo.btVector3( 0, 0, 0 );
	shape.calculateLocalInertia( mass, localInertia );
	var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
	var body = new Ammo.btRigidBody( rbInfo );
	threeObject.userData.physicsBody = body;
	scene.add( threeObject );
	if ( mass > 0 ) {
		rigidBodies.push( threeObject );
		// Disable deactivation
		body.setActivationState( 4 );
	}
	physicsWorld.addRigidBody( body );
}
function cretae3MFFurniture(MFPath, MFColor, MFSize, MFPositionX, MFPositionY, MFPositionZ, MFImage){
	var loader = new THREE.STLLoader();
	loader.load( MFPath, function (geometry) {	
		var material = new THREE.MeshPhongMaterial({color: MFColor, specular: 0x111111, shininess: 200});	
		var mesh = new THREE.Mesh(geometry, material);	
		mesh.position.set(MFPositionX, MFPositionY, MFPositionZ);	
		mesh.rotation.set(-1.57, 0, 0);	
		mesh.scale.set(MFSize, MFSize, MFSize);	
		mesh.castShadow = true;	
		mesh.receiveShadow = true;	
		furnituresSelectObject.push(mesh);
		mesh.name = MFImage;
		objects.push(mesh);	
		scene.add(mesh);
		UserSelectedFurniture = mesh;
		optionSelectorFurniture(UserSelectedFurniture);
	} );
}
function addFunitureToScene(object){
	console.log(object);
	var tmp = object.getAttribute("src").substring(3);
	var path = "3D" + tmp.substring(0, tmp.length-3) + "stl";
	cretae3MFFurniture(path, "#ffffff", 1, 0, 0, 0, tmp);

	$("#furnitureOptions").animate({top: "0px"}, 500);

	console.log(path);
}
function optionSelectorFurniture(furniture){
	$("#furnitureOptions #selectedFurnitureImg img").attr("src","img"+furniture.name);
}
function turnLeft(){
	UserSelectedFurniture.rotation.z-=0.261666;
}
function turnRight(){
	UserSelectedFurniture.rotation.z+=0.261666;
}
function big(){
	if(UserSelectedFurniture.name.indexOf("yapı") != -1){		
		UserSelectedFurniture.scale.y += 0.05;
	}else{
		UserSelectedFurniture.scale.x += 0.05;
		UserSelectedFurniture.scale.y += 0.05;
		UserSelectedFurniture.scale.z += 0.05;
	}
}
function small(){
	if(UserSelectedFurniture.name.indexOf("yapı") != -1){		
		UserSelectedFurniture.scale.y -= 0.05;
	}else{
		UserSelectedFurniture.scale.x -= 0.05;
		UserSelectedFurniture.scale.y -= 0.05;
		UserSelectedFurniture.scale.z -= 0.05;
	}
}
function upMove(){
	if(UserSelectedFurniture.position.y < 10){
		if(shiftClick){
			UserSelectedFurniture.position.y+=1.0;
		}else{
			UserSelectedFurniture.position.y+=0.1;
		}
	}
}
function downMove(){
	if(UserSelectedFurniture.position.y > -5){
		if(shiftClick){
			UserSelectedFurniture.position.y-=1.0;
		}else{
			UserSelectedFurniture.position.y-=0.1;
		}
	}
}
function deleteFurniture(){
	delete furnituresSelectObject[furnituresSelectObject.indexOf(UserSelectedFurniture)];
	furnituresSelectObject.sort().pop();
	scene.remove(UserSelectedFurniture);
	if(furnituresSelectObject.length == 0){
		$("#furnitureOptions").animate({top: "-580px"}, 500);
	}else{
		UserSelectedFurniture = furnituresSelectObject[0];
		optionSelectorFurniture(UserSelectedFurniture);
	}
}

function resetCamera(){
	controls.reset();
}
function save(){
	console.log(furnituresSelectObject);
}
$(document).keydown(function (e) {
	if (e.keyCode == 16) {
		shiftClick = true;
	}
});
$(document).keyup(function (e) {
	if (e.keyCode == 16) {
		shiftClick = false;
	}
});
