<?php
	include 'db_last_product.php';
	$db_result = getLastProduct();
?>

<!DOCTYPE html>
<html>
<?php include 'pg_default.php'; ?>
<body id="index_page">
<?php include 'pg_navbar.php'; ?>

	<div class="row" id="content">
		<?php while($row = mysqli_fetch_array($db_result)){ ?>
		<div class="col-md-4 product">
			<div class="row show"><img src=<?php echo '"'.$row['product_image'].'"' ?>></div>
			<div class="row name"><?php echo $row['product_name'] ?></div>
			<div class="row amount">$ <?php echo $row['product_amount'] ?></div>
			<div class="row button" value=<?php echo '"'.$row['product_id'].'"' ?>>Add To Cart</div>
		</div>
		<?php } ?>
	</div>
</div>

</body>
</html>
