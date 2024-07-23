package com.insignia.model;

import java.util.List;

import com.insignia.constant.ProductConstants;

import lombok.Getter;
import lombok.Setter;

public class ProductRequest {

	@Getter
	@Setter
	private Long productSequenceNumber;

	@Getter
	@Setter
	private String applicationId;

	@Getter
	@Setter
	private String tenantId;

	@Getter
	private String productId = ProductConstants.newDefaultId;
	private boolean isProductIdUpdated;

	// updated remaining only
	@Getter
	private String productName;
	private boolean isProductNameUpdated;

	@Getter
	private String description;
	private boolean isDescriptionUpdated;

	@Getter
	private String measuringQuantity;
	private boolean isMeasuringQuantityUpdated;

	@Getter
	private String measuringUnit;
	private boolean isMeasuringUnitUpdated;

	@Getter
	private Long subcategoryId;
	private boolean isSubcategoryIdUpdated;

	@Getter
	private String productImagePath;
	private boolean isProductImagePathUpdated;

	@Getter
	private String defaultImage;
	private boolean isDefaultImageUpdated;

	@Getter
	private Float productPerUnitActualPrice;
	private boolean isProductPerUnitActualPriceUpdated;

	@Getter
	private Float productPerUnitCurrentPrice;
	private boolean isProductPerUnitCurrentPriceUpdated;

	@Getter
	private Float productLength;
	private boolean isLengthUpdated;

	@Getter
	private Float width;
	private boolean isWidthUpdated;

	@Getter
	private Float height;
	private boolean isHeightUpdated;

	@Getter
	private String dimensionUnit;
	private boolean isDimensionUnitUpdated;

	@Getter
	private String materials;
	private boolean isMaterialsUpdated;

	@Getter
	private String colours;
	private boolean isColoursUpdated;

	@Getter
	private Integer productQuantity;
	private boolean isProductQuantityUpdated;

	@Getter
	private String productFamily;
	private boolean isProductFamilyUpdated;

	@Getter
	private String productBrand;
	private boolean isProductBrandUpdated;

	@Getter
	private String productCatalogue;
	private boolean isProductCatalogueUpdated;

	@Getter
	private Boolean newArrival;
	private boolean isNewArrivalUpdated;

	@Getter
	private Boolean featuredProduct;
	private boolean isFeaturedProductUpdated;

	@Getter
	private Boolean topSellingProduct;
	private boolean isTopSellingProductUpdated;

	@Getter
	private Boolean bestSeller;
	private boolean isBestSellerUpdated;

	@Getter
	private String productFinish;
	private boolean isProductFinishUpdated;

	@Getter
	private Float prodWholesaleTier1Price;
	private boolean isProductWholeTier1PriceUpdated;

	@Getter
	private Float prodWholesaleTier2Price;
	private boolean isProductWholeTier2PriceUpdated;

	@Getter
	private Float prodWholesaleTier1SalePrice;
	private boolean isProductWholeTier1SalePriceUpdated;

	@Getter
	private Float prodWholesaleTier2SalePrice;
	private boolean isProductWholeTier2SalePriceUpdated;

	@Getter
	private Float prodRetailTier1Price;
	private boolean isProductRetailTier1PriceUpdated;

	@Getter
	private Float prodRetailTier2Price;
	private boolean isProductRetailTier2PriceUpdated;

	@Getter
	private Float prodRetailTier1SalePrice;
	private boolean isProdRetailTier1SalePriceUpdated;

	@Getter
	private Float prodRetailTier2SalePrice;
	private boolean isProdRetailTier2SalePriceUpdated;

	@Getter
	private Boolean someOfAKind;
	private boolean isSomeOfAKindUpdated;

	@Getter
	private Boolean saleItems;
	private boolean isSaleItemsUpdated;

	@Getter
	private Boolean closeOut;
	private boolean isCloseOutUpdated;

	@Getter
	private Boolean quickShip;
	private boolean isQuickShipUpdated;

	@Getter
	private Boolean oneOfKind;
	private boolean isOneOfKindUpdated;
	
	@Getter
	private String eta;
	private boolean isEtaUpdated;

	@Setter
	@Getter
	private List<Long> additionalProductList;

	@Setter
	@Getter
	private List<Long> removedAdditionalProductList;

	public void setProductFinish(String productFinish) {
		this.productFinish = productFinish;
		this.isProductFinishUpdated = true;
	}

	public boolean isProductFinishUpdated() {
		return isProductFinishUpdated;
	}

	public void setProdWholesaleTier1Price(Float prodWholesaleTier1Price) {
		this.prodWholesaleTier1Price = prodWholesaleTier1Price;
		this.isProductWholeTier1PriceUpdated = true;
	}

	public boolean isProductWholeTier1PriceUpdated() {
		return isProductWholeTier1PriceUpdated;
	}

	public void setProdWholesaleTier2Price(Float prodWholesaleTier2Price) {
		this.prodWholesaleTier2Price = prodWholesaleTier2Price;
		this.isProductWholeTier2PriceUpdated = true;
	}

	public boolean isProductWholeTier2PriceUpdated() {
		return isProductWholeTier2PriceUpdated;
	}

	public void setProdWholesaleTier1SalePrice(Float prodWholesaleTier1SalePrice) {
		this.prodWholesaleTier1SalePrice = prodWholesaleTier1SalePrice;
		this.isProductWholeTier1SalePriceUpdated = true;
	}

	public boolean isProductWholeTier1SalePriceUpdated() {
		return isProductWholeTier1SalePriceUpdated;
	}

	public void setProdWholesaleTier2SalePrice(Float prodWholesaleTier2SalePrice) {
		this.prodWholesaleTier2SalePrice = prodWholesaleTier2SalePrice;
		this.isProductWholeTier2SalePriceUpdated = true;
	}

	public boolean isProductWholeTier2SalePriceUpdated() {
		return isProductWholeTier2SalePriceUpdated;
	}

	public void setProdRetailTier1Price(Float prodRetailTier1Price) {
		this.prodRetailTier1Price = prodRetailTier1Price;
		this.isProductRetailTier1PriceUpdated = true;
	}

	public boolean isProductRetailTier1PriceUpdated() {
		return isProductRetailTier1PriceUpdated;
	}

	public void setProdRetailTier2Price(Float prodRetailTier2Price) {
		this.prodRetailTier2Price = prodRetailTier2Price;
		this.isProductRetailTier2PriceUpdated = true;
	}

	public boolean isProductRetailTier2PriceUpdated() {
		return isProductRetailTier2PriceUpdated;
	}

	public void setProdRetailTier1SalePrice(Float prodRetailTier1SalePrice) {
		this.prodRetailTier1SalePrice = prodRetailTier1SalePrice;
		this.isProdRetailTier1SalePriceUpdated = true;
	}

	public boolean isProdRetailTier1SalePriceUpdated() {
		return isProdRetailTier1SalePriceUpdated;
	}

	public void setProdRetailTier2SalePrice(Float prodRetailTier2SalePrice) {
		this.prodRetailTier2SalePrice = prodRetailTier2SalePrice;
		this.isProdRetailTier2SalePriceUpdated = true;
	}

	public boolean isProdRetailTier2SalePriceUpdated() {
		return isProdRetailTier2SalePriceUpdated;
	}

	public void setProductId(String productId) {
		this.productId = productId;
		this.isProductIdUpdated = true;
	}

	public boolean isProductIdUpdated() {
		return isProductIdUpdated;
	}

	public void setProductName(String productName) {
		this.productName = productName;
		this.isProductNameUpdated = true;
	}

	public boolean isProductNameUpdated() {
		return isProductNameUpdated;
	}

	public void setDescription(String description) {
		this.description = description;
		this.isDescriptionUpdated = true;
	}

	public boolean isDescriptionUpdated() {
		return isDescriptionUpdated;
	}

	public void setMeasuringQuantity(String measuringQuantity) {
		this.measuringQuantity = measuringQuantity;
		this.isMeasuringQuantityUpdated = true;
	}

	public boolean isMeasuringQuantityUpdated() {
		return isMeasuringQuantityUpdated;
	}

	public void setMeasuringUnit(String measuringUnit) {
		this.measuringUnit = measuringUnit;
		this.isMeasuringUnitUpdated = true;
	}

	public boolean isMeasuringUnitUpdated() {
		return isMeasuringUnitUpdated;
	}

	public void setSubcategoryId(Long subcategoryId) {
		this.subcategoryId = subcategoryId;
		this.isSubcategoryIdUpdated = true;
	}

	public boolean isSubcategoryIdUpdated() {
		return isSubcategoryIdUpdated;
	}

	public void setProductImagePath(String productImagePath) {
		this.productImagePath = productImagePath;
		this.isProductImagePathUpdated = true;
	}

	public boolean isProductImagePathUpdated() {
		return isProductImagePathUpdated;
	}

	public void setProductPerUnitActualPrice(Float productPerUnitActualPrice) {
		this.productPerUnitActualPrice = productPerUnitActualPrice;
		this.isProductPerUnitActualPriceUpdated = true;
	}

	public boolean isProductPerUnitActualPriceUpdated() {
		return isProductPerUnitActualPriceUpdated;
	}

	public void setProductPerUnitCurrentPrice(Float productPerUnitCurrentPrice) {
		this.productPerUnitCurrentPrice = productPerUnitCurrentPrice;
		this.isProductPerUnitCurrentPriceUpdated = true;
	}

	public boolean isProductPerUnitCurrentPriceUpdated() {
		return isProductPerUnitCurrentPriceUpdated;
	}

	public void setProductLength(Float productLength) {
		this.productLength = productLength;
		this.isLengthUpdated = true;
	}

	public boolean isLengthUpdated() {
		return isLengthUpdated;
	}

	public void setWidth(Float width) {
		this.width = width;
		this.isWidthUpdated = true;
	}

	public boolean isWidthUpdated() {
		return isWidthUpdated;
	}

	public void setHeight(Float height) {
		this.height = height;
		this.isHeightUpdated = true;
	}

	public boolean isHeightUpdated() {
		return isHeightUpdated;
	}

	public void setDimensionUnit(String dimensionUnit) {
		this.dimensionUnit = dimensionUnit;
		this.isDimensionUnitUpdated = true;
	}

	public boolean isDimensionUnitUpdated() {
		return isDimensionUnitUpdated;
	}

	public void setMaterials(String materials) {
		this.materials = materials;
		this.isMaterialsUpdated = true;
	}

	public boolean isMaterialsUpdated() {
		return isMaterialsUpdated;
	}

	public void setColours(String colours) {
		this.colours = colours;
		this.isColoursUpdated = true;
	}

	public boolean isColoursUpdated() {
		return isColoursUpdated;
	}

	public void setProductQuantity(Integer productQuantity) {
		this.productQuantity = productQuantity;
		this.isProductQuantityUpdated = true;
	}

	public boolean isProductQuantityUpdated() {
		return isProductQuantityUpdated;
	}

	public void setProductFamily(String productFamily) {
		this.productFamily = productFamily;
		this.isProductFamilyUpdated = true;
	}

	public boolean isProductFamilyUpdated() {
		return isProductFamilyUpdated;
	}

	public void setProductBrand(String productBrand) {
		this.productBrand = productBrand;
		this.isProductBrandUpdated = true;
	}

	public boolean isProductBrandUpdated() {
		return isProductBrandUpdated;
	}

	public void setProductCatalogue(String productCatalogue) {
		this.productCatalogue = productCatalogue;
		this.isProductCatalogueUpdated = true;
	}

	public boolean isProductCatalogueUpdated() {
		return isProductCatalogueUpdated;
	}

	public void setNewArrival(Boolean newArrival) {
		this.newArrival = newArrival;
		this.isNewArrivalUpdated = true;
	}

	public boolean isNewArrivalUpdated() {
		return isNewArrivalUpdated;
	}

	public void setFeaturedProduct(Boolean featuredProduct) {
		this.featuredProduct = featuredProduct;
		this.isFeaturedProductUpdated = true;
	}

	public boolean isFeaturedProductUpdated() {
		return isFeaturedProductUpdated;
	}

	public void setTopSellingProduct(Boolean topSellingProduct) {
		this.topSellingProduct = topSellingProduct;
		this.isTopSellingProductUpdated = true;
	}

	public boolean isTopSellingProductUpdated() {
		return isTopSellingProductUpdated;
	}

	public void setBestSeller(Boolean bestSeller) {
		this.bestSeller = bestSeller;
		this.isBestSellerUpdated = true;
	}

	public boolean isBestSellerUpdated() {
		return isBestSellerUpdated;
	}

	public void setDefaultImage(String defaultImage) {
		this.defaultImage = defaultImage;
		this.isDefaultImageUpdated = true;
	}

	public boolean isDefaultImageUpdated() {
		return isDefaultImageUpdated;
	}

	public void setSomeOfAKind(Boolean someOfAKind) {
		this.someOfAKind = someOfAKind;
		this.isSomeOfAKindUpdated = true;
	}

	public boolean isSomeOfAKindUpdated() {
		return isSomeOfAKindUpdated;
	}

	public void setSaleItems(Boolean saleItems) {
		this.saleItems = saleItems;
		this.isSaleItemsUpdated = true;
	}

	public boolean isSaleItemsUpdated() {
		return isSaleItemsUpdated;
	}

	public void setCloseOut(Boolean closeOut) {
		this.closeOut = closeOut;
		this.isCloseOutUpdated = true;
	}

	public boolean isCloseOutUpdated() {
		return isCloseOutUpdated;
	}

	public void setQuickShip(Boolean quickShip) {
		this.quickShip = quickShip;
		this.isQuickShipUpdated = true;
	}

	public boolean isQuickShipUpdated() {
		return isQuickShipUpdated;
	}

	public void setEta(String eta) {
		this.eta = eta;
		this.isEtaUpdated = true;
	}

	public boolean isEtaUpdated() {
		return isEtaUpdated;
	}
	public void setOneOfKind(Boolean oneOfKind) {
		this.oneOfKind = oneOfKind;
		this.isOneOfKindUpdated = true;
	}

	public boolean isOneOfKindUpdated() {
		return isOneOfKindUpdated;
	}

	

}
