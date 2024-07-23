package com.insignia.serviceImpl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import com.insignia.customExceptions.InvalidInputParametersException;
import com.insignia.customExceptions.TokenExpiredException;
import com.insignia.daoInterface.ProductDaoInterface;
import com.insignia.daoInterface.TokenDaoInterface;
import com.insignia.entity.ProductAdditionalProducts;
import com.insignia.entity.ProductDetails;
import com.insignia.entity.ProductSubCategory;
import com.insignia.model.Pagination;
import com.insignia.model.ProductDetailsResponse;
import com.insignia.model.ProductFilterCriteria;
import com.insignia.model.ProductFilterResponse;
import com.insignia.model.ProductManagementRequest;
import com.insignia.model.ProductRequest;
import com.insignia.model.ProductResponse;
import com.insignia.serviceimpl.ProductServiceImpl;

@ExtendWith(MockitoExtension.class)
public class TestProductServiceImpl {

	@InjectMocks
	private ProductServiceImpl productServiceImpl;

	@Mock
	private ProductDaoInterface productDaoRepo;

	@Mock
	private TokenDaoInterface tokenRepo;

	List<ProductResponse> productResponseList = new ArrayList<>();

	List<ProductDetails> productDetailsList = new ArrayList<>();

	ProductRequest productRequest = new ProductRequest();
	ProductResponse productResponse = new ProductResponse();

	ProductDetails productDetails = new ProductDetails();
	PageRequest pageRequest = PageRequest.of(0, 50);

	Page<ProductDetails> productDetailsPage = new PageImpl(Collections.singletonList(productDetails), pageRequest, 1l);

	ProductSubCategory productSubCategory = new ProductSubCategory();
	ProductDetailsResponse productDetailsResponse = new ProductDetailsResponse();

	ProductManagementRequest productManagementRequest = new ProductManagementRequest();

	ProductFilterCriteria productFilterCriteria = new ProductFilterCriteria();

	List<ProductAdditionalProducts> additionalProductsList = new ArrayList<>();
	ProductAdditionalProducts productAdditionalProducts = new ProductAdditionalProducts();

	ProductFilterResponse productFilterResponse = new ProductFilterResponse();

	List<ProductFilterResponse> productFilterResponseList = new ArrayList<>();

	public void dataInitilization() {
		Pagination pagination = new Pagination();
		pagination.setLimit(10l);
		pagination.setOffset(1l);
		productManagementRequest.setCustomerSequenceNumber(5L);
		productManagementRequest.setExpirationDuration(15);
		productManagementRequest.setPagination(pagination);
		productRequest.setProductSequenceNumber(5L);

		productRequest.setProductName("mobile");
		productRequest.setDescription("Very smart Mobile");
		productRequest.setMeasuringQuantity("2");
		productRequest.setMeasuringUnit("5");
		productRequest.setSubcategoryId(5L);
		productRequest.setProductImagePath("Mobile");
		productRequest.isProductNameUpdated();
		productRequest.setProductPerUnitActualPrice(2f);
		productRequest.setProductPerUnitCurrentPrice(3f);
		productRequest.setProductLength(3f);
		productRequest.setHeight(2f);
		productRequest.setWidth(1f);
		productRequest.setDimensionUnit("Inches");
		productRequest.setProductSequenceNumber(5L);
		productRequest.setProductImagePath("Apple");
		productRequest.setMaterials("Mobile");
		productRequest.setColours("Pink");
		productRequest.setProductFamily("abc");
		productRequest.setProductBrand("xyz");
		productRequest.setProductCatalogue("eoi");
		productRequest.setNewArrival(true);
		productRequest.setTopSellingProduct(true);
		productRequest.setBestSeller(true);
		productRequest.setFeaturedProduct(true);
		productRequest.setProductFinish("Wood");
		productRequest.setProdWholesaleTier1Price(10f);
		productRequest.setProdWholesaleTier2Price(20f);
		productRequest.setProdWholesaleTier1SalePrice(30f);
		productRequest.setProdWholesaleTier2SalePrice(40f);
		productRequest.setProdRetailTier1Price(50f);
		productRequest.setProdRetailTier2Price(60f);
		productRequest.setProdRetailTier1SalePrice(70f);
		productRequest.setProdRetailTier2SalePrice(80f);
		productRequest.setApplicationId("insignia");
		productRequest.setTenantId("LU008");
		productRequest.setSomeOfAKind(true);
		productRequest.setCloseOut(true);
		productRequest.setEta("abc");
		productRequest.setOneOfKind(true);
		productRequest.setSaleItems(true);
		productRequest.setQuickShip(true);

		List<Long> additionalProductList = Arrays.asList(70L, 71L);
		productRequest.setAdditionalProductList(additionalProductList);

		List<String> colourList = new ArrayList<>();
		colourList.add("red");
		productFilterCriteria.setColourList(colourList);

		List<String> materialList = new ArrayList<>();
		materialList.add("wood");
		productFilterCriteria.setMaterialList(materialList);

		List<Long> subcategoryList = new ArrayList<>();
		subcategoryList.add(5L);
		productFilterCriteria.setSubCategoryList(subcategoryList);

		productFilterCriteria.setMinPrice(12f);
		productFilterCriteria.setMaxPrice(4f);

		productFilterCriteria.setAvailability(true);

		List<String> productFamilyList = new ArrayList<>();
		productFamilyList.add("abc");
		productFilterCriteria.setProductFamilyList(productFamilyList);

		List<String> productBrandList = new ArrayList<>();
		productBrandList.add("xyz");
		productFilterCriteria.setProductBrandList(productBrandList);

		List<String> productCatalogueList = new ArrayList<>();
		productCatalogueList.add("eoi");
		productFilterCriteria.setProductCatalogueList(productCatalogueList);

		productManagementRequest.setProductRequest(productRequest);
		productManagementRequest.setFilterCriteria(productFilterCriteria);

		productDetailsResponse.setProductSequenceNumber(5L);
		productDetailsResponse.setProductId("5L");
		productDetailsResponse.setProductName("mobile");
		productDetailsResponse.setDescription("Very smart Mobile");
		productDetailsResponse.setMeasuringQuantity("2");
		productDetailsResponse.setMeasuringUnit("5");
		productDetailsResponse.setSubcategoryId(5L);
		productDetailsResponse.setProductImagePath("Mobile");
		productDetailsResponse.setProductId("5L");
		productDetailsResponse.setSomeOfAKind(true);
		productDetailsResponse.setCloseOut(true);
		productDetailsResponse.setEta("abc");
		productDetailsResponse.setOneOfKind(true);
		productDetailsResponse.setSaleItems(true);
		productDetailsResponse.setQuickShip(true);

		productDetailsResponse.setProductFinish("Wood");
		productDetailsResponse.setProdWholesaleTier1Price(10f);
		productDetailsResponse.setProdWholesaleTier2Price(20f);
		productDetailsResponse.setProdWholesaleTier1SalePrice(30f);
		productDetailsResponse.setProdWholesaleTier2SalePrice(40f);
		productDetailsResponse.setProdRetailTier1Price(50f);
		productDetailsResponse.setProdRetailTier2Price(60f);
		productDetailsResponse.setProdRetailTier1SalePrice(70f);
		productDetailsResponse.setProdRetailTier2SalePrice(80f);
		productDetailsResponse.setNewArrival(true);
		productDetailsResponse.setTopSellingProduct(true);
		productDetailsResponse.setBestSeller(true);
		productDetailsResponse.setFeaturedProduct(true);

		productFilterResponse.setProductSequenceNumber(5L);
		productFilterResponse.setProductId("5L");
		productFilterResponse.setProductName("mobile");
		productFilterResponse.setDescription("Very smart Mobile");

		productFilterResponseList.add(productFilterResponse);

		productResponse.setProductDetailsResponse(Collections.singletonList(productDetailsResponse));
		productResponseList.add(productResponse);

		productDetailsResponse.setAdditionalProducts(productFilterResponseList);

		productDetails.setProductName("mobile");
		productDetails.setDescription("Very smart Mobile");
		productDetails.setMeasuringQuantity("2");
		productDetails.setMeasuringUnit("5");
		productDetails.setSubcategoryId(5L);
		productDetails.setProductImagePath("Mobile");
		productDetails.setProductFamily("abc");
		productDetails.setProductBrand("xyz");
		productDetails.setProductCatalogue("eio");

		productDetails.setProductFinish("Wood");
		productDetails.setProdWholesaleTier1Price(10f);
		productDetails.setProdWholesaleTier2Price(20f);
		productDetails.setProdWholesaleTier1SalePrice(30f);
		productDetails.setProdWholesaleTier2SalePrice(40f);
		productDetails.setProdRetailTier1Price(50f);
		productDetails.setProdRetailTier2Price(60f);
		productDetails.setProdRetailTier1SalePrice(70f);
		productDetails.setProdRetailTier2SalePrice(80f);
		productDetails.setNewArrival(true);
		productDetails.setTopSellingProduct(true);
		productDetails.setBestSeller(true);
		productDetails.setFeaturedProduct(true);
		productDetails.setApplicationId("insignia");
		productDetails.setTenantId("LU008");
		productDetails.setSomeOfAKind(true);
		productDetails.setCloseOut(true);
		productDetails.setEta("abc");
		productDetails.setOneOfKind(true);
		productDetails.setSaleItems(true);
		productDetails.setQuickShip(true);


		productSubCategory.setCategoryId(5L);
		productSubCategory.setSubCategoryName("phone");

		productSubCategory.setSubCategoryDescription("Its vary high");
		productSubCategory.setSubCategoryImagePath("D drive");

		productAdditionalProducts.setAdditionalProduct(70L);
		productAdditionalProducts.setProductSequenceNumber(180L);
		additionalProductsList.add(productAdditionalProducts);
		productDetails.setProductAdditionalProducts(additionalProductsList);
		productManagementRequest.setFilterCriteria(productFilterCriteria);

		productDetailsList.add(productDetails);

	}

	public ProductDetails getProductDetails() {
		productDetails.setProductSequenceNumber(5L);
		productDetails.setProductId("5L");
		productDetails.setProductName("mobile");
		productDetails.setDescription("Very smart Mobile");
		productDetails.setMeasuringQuantity("2");
		productDetails.setMeasuringUnit("5");
		productDetails.setSubcategoryId(5L);
		productDetails.setProductImagePath("Mobile");
		productDetails.setProductFinish("Wood");
		productDetails.setProdWholesaleTier1Price(10f);
		productDetails.setProdWholesaleTier2Price(20f);
		productDetails.setProdWholesaleTier1SalePrice(30f);
		productDetails.setProdWholesaleTier2SalePrice(40f);
		productDetails.setProdRetailTier1Price(50f);
		productDetails.setProdRetailTier2Price(60f);
		productDetails.setProdRetailTier1SalePrice(70f);
		productDetails.setProdRetailTier2SalePrice(80f);
		productDetails.setNewArrival(true);
		productDetails.setTopSellingProduct(true);
		productDetails.setBestSeller(true);
		productDetails.setFeaturedProduct(true);
		return productDetails;
	}

	public ProductSubCategory getProductSubCategory() {

		productSubCategory.setCategoryId(5L);
		productSubCategory.setSubCategoryName("phone");

		productSubCategory.setSubCategoryDescription("Its vary high");
		productSubCategory.setSubCategoryImagePath("D drive");
		productSubCategory.setSubCategoryId(1L);

		return productSubCategory;
	}

	public ProductResponse getProductResponse() {
		ProductDetailsResponse productDetailsResponse = new ProductDetailsResponse();

		productDetailsResponse.setProductSequenceNumber(5L);
		productDetailsResponse.setProductId("5L");
		productDetailsResponse.setProductName("mobile");
		productDetailsResponse.setDescription("Very smart Mobile");
		productDetailsResponse.setMeasuringQuantity("2");
		productDetailsResponse.setMeasuringUnit("5");
		productDetailsResponse.setSubcategoryId(5L);
		productDetailsResponse.setProductImagePath("Mobile");
		productDetailsResponse.setProductFamily("abc");
		productDetailsResponse.setProductBrand("xyz");
		productDetailsResponse.setProductCatalogue("eio");
		productResponse.setProductDetailsResponse(Collections.singletonList(productDetailsResponse));
		return productResponse;
	}

	@Test
	public void testAddProduct() throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		Long subcategoryId = 5L;
		String applicationId = "insignia";
		String tenantId = "LU008";

		doNothing().when(tokenRepo).checkTokenValidity(any(), any());

		when(productDaoRepo.findByProductSubCategory(subcategoryId)).thenReturn(true);

		List<Long> additionalProductsSequenceList = new ArrayList<>();
		additionalProductsSequenceList.add(70L);
		additionalProductsSequenceList.add(71L);

		when(productDaoRepo.fetchAddtionalProductDataList(applicationId, tenantId, additionalProductsSequenceList))
				.thenReturn(productDetailsList);

		Mockito.when(productDaoRepo.addProduct(Mockito.any(ProductDetails.class))).thenReturn(productDetails);

		ProductResponse addProduct = productServiceImpl.addProduct(productManagementRequest);

		assertNotNull(addProduct);
	}

	@Test
	public void testAddProductSubcategoryId_IsNotFoundException()
			throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		Long subcategoryId = 5L;

		when(productDaoRepo.findByProductSubCategory(subcategoryId)).thenReturn(false);

		assertThrows(InvalidInputParametersException.class, () -> {
			productServiceImpl.addProduct(productManagementRequest);

		});
		verify(productDaoRepo, times(1)).findByProductSubCategory(subcategoryId);

	}

	@Test
	public void testUpdateProduct() throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		Long productSequenceNumber = 5L;
		String applicationId = "insignia";
		String tenantId = "LU008";
		productRequest.setProductId("100");

		doNothing().when(tokenRepo).checkTokenValidity(any(), any());

		Optional<ProductDetails> optional = Optional.ofNullable(productDetails);
		when(productDaoRepo.getProductDetails(productSequenceNumber, applicationId, tenantId)).thenReturn(optional);

		getProductSubCategory();
		Long subcategoryId = 5L;

		when(productDaoRepo.findByProductSubCategory(any())).thenReturn(true);

		Mockito.when(productDaoRepo.updateProduct(productDetails)).thenReturn(productDetails);

		ProductResponse updateProduct = productServiceImpl.updateProduct(productManagementRequest);

		assertNotNull(updateProduct);

		verify(productDaoRepo, times(1)).getProductDetails(productSequenceNumber, applicationId, tenantId);
		verify(productDaoRepo, times(1)).findByProductSubCategory(subcategoryId);
		verify(productDaoRepo, times(1)).updateProduct(any());

	}

	@Test
	public void testUpdateProduct_ProductSequenceNumberNotFound() {
		productRequest.setProductSequenceNumber(null);
		productManagementRequest.setProductRequest(productRequest);

		assertThrows(InvalidInputParametersException.class,
				() -> productServiceImpl.updateProduct(productManagementRequest));

	}

	@Test
	public void testUpdateProduct_ProductDetailsNotFound() {
		productRequest.setProductSequenceNumber(5L);
		productManagementRequest.setProductRequest(productRequest);
		when(productDaoRepo.getProductDetails(any(),any(),any())).thenReturn(Optional.empty());

		assertThrows(InvalidInputParametersException.class,
				() -> productServiceImpl.updateProduct(productManagementRequest));

		verify(productDaoRepo, times(1)).getProductDetails(any(),any(),any());

	}

	@Test
	public void testDeleteByproductId() throws TokenExpiredException, InvalidInputParametersException {
		productRequest.setProductSequenceNumber(5L);
		productRequest.setApplicationId("insignia");
		productRequest.setTenantId("LU008");
		productManagementRequest.setProductRequest(productRequest);
		Long productSequenceNumber = 5L;

		String applicationId = "insignia";
		String tenantId = "LU008";

		doNothing().when(tokenRepo).checkTokenValidity(any(), any());

		when(productDaoRepo.getProductDetails(productSequenceNumber, applicationId, tenantId))
				.thenReturn(Optional.of(productDetails));
		productServiceImpl.deleteProductById(productManagementRequest);
		;

		verify(productDaoRepo, times(1)).deleteProductById(productSequenceNumber, applicationId, tenantId);

	}

	@Test
	public void testDeleteProduct_ProductDetailsNotFound() {

		dataInitilization();
		when(productDaoRepo.getProductDetails(any(), any(), any())).thenReturn(Optional.empty());

		assertThrows(InvalidInputParametersException.class,
				() -> productServiceImpl.deleteProductById(productManagementRequest));

		verify(productDaoRepo, times(1)).getProductDetails(any(), any(), any());
	}

	@Test
	public void testGetProductById() throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		getProductResponse();

		Long productSequenceNumber = 5L;
		String applicationId = "insignia";
		String tenantId = "LU008";

		doNothing().when(tokenRepo).checkTokenValidity(any(), any());

		when(productDaoRepo.getProductDetails(productSequenceNumber, applicationId, tenantId)).thenReturn(Optional.of(productDetails));
		Optional<ProductResponse> productById = productServiceImpl.getProductById(productManagementRequest);

		assertNotNull(productById);
	}

	@Test
	public void testGetProductByIdEmptyList() throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		getProductResponse();

		Long customerSequenceNumber = 5L;
		Integer expirationDuration = 15;

		Optional<ProductResponse> productById = productServiceImpl.getProductById(productManagementRequest);
		assertNotNull(productById);
	}

	@Test
	public void testGetAllProductsList() throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		getProductResponse();

		Long customerSequenceNumber = 5L;
		Integer expirationDuration = 15;

		doNothing().when(tokenRepo).checkTokenValidity(any(), any());

		Mockito.when(productDaoRepo.getAllProducts(any())).thenReturn(productDetailsPage);

		ProductResponse allProducts = productServiceImpl.getAllProducts(customerSequenceNumber, expirationDuration);

		assertNotNull(allProducts);
	}

	@Test
	public void testSubcategoryIdNotFoundException() throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		Long subcategoryId = 5L;

		when(productDaoRepo.findByProductSubCategory(subcategoryId)).thenReturn(false);

		assertThrows(InvalidInputParametersException.class,
				() -> productServiceImpl.addProduct(productManagementRequest));

		assertThrows(InvalidInputParametersException.class,
				() -> productServiceImpl.updateProduct(productManagementRequest));

	}

	@Test
	public void testSubcategoryIdNotFoundInUpdateException()
			throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		Long subcategoryId = 5L;

		dataInitilization();
		getProductDetails();
		productRequest = new ProductRequest();
		productRequest.setProductName("HI");
		productRequest.setDescription("ItsGood");
		productRequest.setMeasuringUnit("4");
		productRequest.setMeasuringQuantity("5");
		productRequest.setSubcategoryId(5L);

		productRequest.setProductSequenceNumber(5L);

		productManagementRequest.setProductRequest(productRequest);
		when(productDaoRepo.getProductDetails(any(), any(), any())).thenReturn(Optional.of(productDetails));
		when(productDaoRepo.findByProductSubCategory(subcategoryId)).thenReturn(false);

		assertThrows(InvalidInputParametersException.class,
				() -> productServiceImpl.updateProduct(productManagementRequest));

	}

	@Test // TODO: need to fix
	public void testFilterCriteria() throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		getProductResponse();

		List<String> colourList = new ArrayList<>();
		colourList.add("red");
		productFilterCriteria.setColourList(colourList);

		List<String> materialList = new ArrayList<>();
		materialList.add("wood");
		productFilterCriteria.setMaterialList(materialList);

		List<Long> subcategoryList = new ArrayList<>();
		subcategoryList.add(5L);
		productFilterCriteria.setSubCategoryList(subcategoryList);

		productFilterCriteria.setMinPrice(12f);
		productFilterCriteria.setMaxPrice(4f);

		productFilterCriteria.setAvailability(true);
		productFilterCriteria.setNewArrival(true);
		productFilterCriteria.setFeaturedProduct(true);
		productFilterCriteria.setTopSellingProduct(true);
		productFilterCriteria.setBestSeller(true);
		productFilterCriteria.setSearchString("Book");
		productFilterCriteria.setApplicationId("hinges-design");
		productFilterCriteria.setTenantId("LU008");

		List<String> productFamilyList = new ArrayList<>();
		productFamilyList.add("abc");
		productFilterCriteria.setProductFamilyList(productFamilyList);

		List<String> productBrandList = new ArrayList<>();
		productBrandList.add("xyz");
		productFilterCriteria.setProductBrandList(productBrandList);

		List<String> productCatalogueList = new ArrayList<>();
		productCatalogueList.add("eoi");
		productFilterCriteria.setProductCatalogueList(productCatalogueList);

		productFilterCriteria.setIsToGetAllProduct(false);

		Map<String, Object> filterCriteria = new HashMap<>();
		filterCriteria.put("ColourList", Arrays.asList("red"));
		filterCriteria.put("MaterialList", Arrays.asList("wood"));
		filterCriteria.put("MinPrice", 12f);
		filterCriteria.put("MaxPrice", 4f);
		filterCriteria.put("SortingCriteria", "ASC");
		filterCriteria.put("SubCategoryList", Arrays.asList(5L));
		filterCriteria.put("Availability", true);
		filterCriteria.put("ProductFamilyList", Arrays.asList("abc"));
		filterCriteria.put("ProductBrandList", Arrays.asList("xyz"));
		filterCriteria.put("productCatalogueList", Arrays.asList("eoi"));
		filterCriteria.put("SortingDirection", Sort.Direction.ASC);
		HashMap productDetailsMap = new HashMap<>();
		List<ProductDetails> productDetailsList = new ArrayList<>();
		productDetailsList.add(productDetails);
		productDetailsMap.put("totalCount", 1l);
		productDetailsMap.put("records", productDetailsList);

		doNothing().when(tokenRepo).checkTokenValidity(any(), any());

		when(productDaoRepo.filterProducts(any(), any(), any(), any())).thenReturn(productDetailsMap);

		ProductResponse allProducts = productServiceImpl.filterProduct(productManagementRequest);

		assertNotNull(allProducts);
	}

	@Test // TODO : need to fix
	public void testFilterCriteriaWithGetAllProducts() throws TokenExpiredException, InvalidInputParametersException {

		dataInitilization();
		getProductResponse();

		productFilterCriteria.setIsToGetAllProduct(true);

		doNothing().when(tokenRepo).checkTokenValidity(any(), any());

		when(productDaoRepo.getAllProducts(any())).thenReturn(productDetailsPage);

		ProductResponse allProducts = productServiceImpl.filterProduct(productManagementRequest);

		assertNotNull(allProducts);
	}

	@Test
	public void testGetProductFilters() throws TokenExpiredException, InvalidInputParametersException {
	dataInitilization();
		doNothing().when(tokenRepo).checkTokenValidity(any(), any());

		List<Object[]> mockProductList = new ArrayList<>();
		mockProductList.add(new Object[] { "1", "Product 1", "Description 1" });
		mockProductList.add(new Object[] { "2", "Product 2", "Description 2" });

		when(productDaoRepo.getProductFilters(any(), any())).thenReturn(mockProductList);

		productFilterResponseList = productServiceImpl.getProductFilters(productManagementRequest);

		assertEquals(mockProductList.size(), productFilterResponseList.size());

	}

}
