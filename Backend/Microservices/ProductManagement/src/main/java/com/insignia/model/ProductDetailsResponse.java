package com.insignia.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDetailsResponse {

	private Long productSequenceNumber;
	private String productId;
	private String productName;
	private String description;
	private String measuringQuantity;
	private String measuringUnit;
	private Long subcategoryId;
	private String productImagePath;
	private Float productPerUnitActualPrice;
	private Float productPerUnitCurrentPrice;
	private Float productLength;
	private Float width;
	private Float height;
	private String dimensionUnit;
	private String materials;
	private String colours;
	private Integer productQuantity;
	private String productFamily;
	private String productBrand;
	private String productCatalogue;
	private Boolean newArrival;
	private Boolean featuredProduct;
	private Boolean topSellingProduct;
	private Boolean bestSeller;
	private String productFinish;
	private Float prodWholesaleTier1Price;
	private Float prodWholesaleTier2Price;
	private Float prodWholesaleTier1SalePrice;
	private Float prodWholesaleTier2SalePrice;
	private Float prodRetailTier1Price;
	private Float prodRetailTier2Price;
	private Float prodRetailTier1SalePrice;
	private Float prodRetailTier2SalePrice;
	private String defaultImage;
	private Boolean someOfAKind;
	private Boolean saleItems;
	private Boolean closeOut;
	private Boolean quickShip;
	private String eta;	
	private Boolean oneOfKind;
	
	private List<ProductFilterResponse> additionalProducts = null;

}
