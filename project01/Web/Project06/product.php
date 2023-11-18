<?php
include 'db_all_product.php';
$db_result = getAllProduct();
?>

<!DOCTYPE html>
<html>
<?php include 'pg_default.php'; ?>
<body id="product_page">
<?php include 'pg_navbar.php'; ?>

	<div class="row" id="content">
		<h6 id="product_title">Products</h6>
		<?php while($row = mysqli_fetch_array($db_result)){ ?>
		<div class="col-md-4 product">
			<div class="row show"><img src=<?php echo '"'.$row['product_image'].'"' ?>></div>
			<div class="row name"><?php echo $row['product_name'] ?></div>
			<div class="row amount">$ <?php echo $row['product_amount'] ?></div>
			<div class="row button" value=<?php echo '"'.$row['product_id'].'"' ?>>Add To Cart</div>
		</div>
		<?php } ?>
		<div class="col-md-12" id="line2"></div>

	</div>

</body>
</html>
