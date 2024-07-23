package com.insignia.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "product_details")
public class ProductDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_sequence_number")
	private Long productSequenceNumber;

	@Column(name = "application_id")
	private String applicationId;

	@Column(name = "tenant_id")
	private String tenantId;

	@Column(name = "product_id")
	private String productId;

	@Column(name = "product_name")
	private String productName;

	@Column(name = "description")
	private String description;

	@Column(name = "measuring_quantity")
	private String measuringQuantity;

	@Column(name = "measuring_unit")
	private String measuringUnit;

	@Column(name = "subcategory_id")
	private Long subcategoryId;

	@Column(name = "product_image_path")
	private String productImagePath;

	@Column(name = "default_image", length = 50)
	private String defaultImage;

	@Column(name = "product_per_unit_actual_price", length = 10)
	private Float productPerUnitActualPrice;

	@Column(name = "product_per_unit_current_price", length = 10)
	private Float productPerUnitCurrentPrice;

	@Column(name = "length", length = 7)
	private Float length;

	@Column(name = "width", length = 7)
	private Float width;

	@Column(name = "height", length = 7)
	private Float height;

	@Column(name = "dimension_unit", length = 10)
	private String dimensionUnit;

	@Column(name = "materials", length = 128)
	private String materials;

	@Column(name = "colours", length = 128)
	private String colours;

	@Column(name = "product_quantity")
	private Integer productQuantity;

	@Column(name = "product_family", length = 32)
	private String productFamily;

	@Column(name = "product_brand", length = 32)
	private String productBrand;

	@Column(name = "product_catalogue", length = 32)
	private String productCatalogue;

	@Column(name = "new_arrival", columnDefinition = "BOOLEAN DEFAULT false")
	private Boolean newArrival;

	@Column(name = "featured_product", columnDefinition = "BOOLEAN DEFAULT false")
	private Boolean featuredProduct;

	@Column(name = "top_selling_product", columnDefinition = "BOOLEAN DEFAULT false")
	private Boolean topSellingProduct;

	@Column(name = "best_seller", columnDefinition = "BOOLEAN DEFAULT false")
	private Boolean bestSeller;

	@Column(name = "product_finish", length = 128)
	private String productFinish;

	@Column(name = "prod_wholesale_tier1_price")
	private Float prodWholesaleTier1Price;

	@Column(name = "prod_wholesale_tier2_price")
	private Float prodWholesaleTier2Price;

	@Column(name = "prod_wholesale_tier1_sale_price")
	private Float prodWholesaleTier1SalePrice;

	@Column(name = "prod_wholesale_tier2_sale_price")
	private Float prodWholesaleTier2SalePrice;

	@Column(name = "prod_retail_tier1_price")
	private Float prodRetailTier1Price;

	@Column(name = "prod_retail_tier2_price")
	private Float prodRetailTier2Price;

	@Column(name = "prod_retail_tier1_sale_price")
	private Float prodRetailTier1SalePrice;

	@Column(name = "prod_retail_tier2_sale_price")
	private Float prodRetailTier2SalePrice;

	@Column(name = "some_of_a_kind", columnDefinition = "BOOLEAN DEFAULT false")
	private Boolean someOfAKind;

	@Column(name = "sale_items", columnDefinition = "BOOLEAN DEFAULT false")
	private Boolean saleItems;

	@Column(name = "close_out", columnDefinition = "BOOLEAN DEFAULT false")
	private Boolean closeOut;

	@Column(name = "quick_ship", columnDefinition = "BOOLEAN DEFAULT false")
	private Boolean quickShip;

	@Column(name = "one_of_kind", columnDefinition = "BOOLEAN DEFAULT false")
	private Boolean oneOfKind;

	@Column(name = "eta", length = 30)
	private String eta;

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "product_sequence_number")
	private List<CustomerCartInformation> customerCartInformations;

	@OneToMany(mappedBy = "productDetails")
	private List<OrderAndProductLink> orderAndProductLinkList;

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "product_sequence_number")
	private List<ProductAdditionalProducts> productAdditionalProducts;

	public ProductDetails() {
		super();
	}

	public ProductDetails(Long productSequenceNumber, String productId, String productName, String description,
			Float productPerUnitCurrentPrice, String productImagePath, String defaultImage) {
		super();
		this.productSequenceNumber = productSequenceNumber;
		this.productId = productId;
		this.productName = productName;
		this.description = description;
		this.productPerUnitCurrentPrice = productPerUnitCurrentPrice;
		this.productImagePath = productImagePath;
		this.defaultImage = defaultImage;
	}

	public ProductDetails(Long productSequenceNumber, String applicationId, String tenantId, String productId,
			String productName, String description, String measuringQuantity, String measuringUnit, Long subcategoryId,
			String productImagePath, String defaultImage, Float productPerUnitActualPrice,
			Float productPerUnitCurrentPrice, Float length, Float width, Float height, String dimensionUnit,
			String materials, String colours, Integer productQuantity, String productFamily, String productBrand,
			String productCatalogue, Boolean newArrival, Boolean featuredProduct, Boolean topSellingProduct,
			Boolean bestSeller, String productFinish, Float prodWholesaleTier1Price, Float prodWholesaleTier2Price,
			Float prodWholesaleTier1SalePrice, Float prodWholesaleTier2SalePrice, Float prodRetailTier1Price,
			Float prodRetailTier2Price, Float prodRetailTier1SalePrice, Float prodRetailTier2SalePrice,
			Boolean someOfAKind, Boolean saleItems, Boolean closeOut, Boolean quickShip, String eta,
			Boolean oneOfKind) {
		super();
		this.productSequenceNumber = productSequenceNumber;
		this.applicationId = applicationId;
		this.tenantId = tenantId;
		this.productId = productId;
		this.productName = productName;
		this.description = description;
		this.measuringQuantity = measuringQuantity;
		this.measuringUnit = measuringUnit;
		this.subcategoryId = subcategoryId;
		this.productImagePath = productImagePath;
		this.defaultImage = defaultImage;
		this.productPerUnitActualPrice = productPerUnitActualPrice;
		this.productPerUnitCurrentPrice = productPerUnitCurrentPrice;
		this.length = length;
		this.width = width;
		this.height = height;
		this.dimensionUnit = dimensionUnit;
		this.materials = materials;
		this.colours = colours;
		this.productQuantity = productQuantity;
		this.productFamily = productFamily;
		this.productBrand = productBrand;
		this.productCatalogue = productCatalogue;
		this.newArrival = newArrival;
		this.featuredProduct = featuredProduct;
		this.topSellingProduct = topSellingProduct;
		this.bestSeller = bestSeller;
		this.productFinish = productFinish;
		this.prodWholesaleTier1Price = prodWholesaleTier1Price;
		this.prodWholesaleTier2Price = prodWholesaleTier2Price;
		this.prodWholesaleTier1SalePrice = prodWholesaleTier1SalePrice;
		this.prodWholesaleTier2SalePrice = prodWholesaleTier2SalePrice;
		this.prodRetailTier1Price = prodRetailTier1Price;
		this.prodRetailTier2Price = prodRetailTier2Price;
		this.prodRetailTier1SalePrice = prodRetailTier1SalePrice;
		this.prodRetailTier2SalePrice = prodRetailTier2SalePrice;
		this.someOfAKind = someOfAKind;
		this.saleItems = saleItems;
		this.closeOut = closeOut;
		this.quickShip = quickShip;
		this.eta = eta;
		this.oneOfKind = oneOfKind;
	}

}
