package com.insignia.daoInterface;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.insignia.customExceptions.InvalidInputParametersException;
import com.insignia.entity.ProductDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductDaoInterface {

	ProductDetails addProduct(ProductDetails productDetails) throws InvalidInputParametersException;

	ProductDetails updateProduct(ProductDetails productDetails) throws InvalidInputParametersException;

	void deleteProductById(Long productSequenceNumber, String applicationId, String tenantId);

	Optional<ProductDetails> findByIdForCart(Long productSequenceNumber);
	
	Optional<ProductDetails> getProductDetails(Long productSequenceNumber, String applicationId, String tenantId);
	
	Page<ProductDetails> getAllProducts(Pageable pageRequest);

	boolean findByProductSubCategory(Long subcategoryId);
	
	List<ProductDetails> getSelectedProductDetailsList(String applicationId, String tenantId, List<Long>productSequenceNumberList);
	
	List<ProductDetails> getSelectedProductDetailsListForCartAndOrder(List<Long>productSequenceNumberList);

	HashMap filterProducts(String applicationId, String tenantId, Map<String, Object> filterCriteria, Pageable pageRequest);
	
	void deleteAdditionalProduct(Long productSequenceNumber,
										 List<Long>additionalProduct);

	List<Object[]> getProductFilters(String applicationId, String tenantId);

	public List<ProductDetails> fetchAddtionalProductDataList(String applicationId, String tenantId, List<Long> additionalProductsList);
}
