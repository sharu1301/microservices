package com.insignia.validations;

import com.insignia.constants.ProductValidatorConstants;
import com.insignia.customExceptions.InvalidInputParametersException;

public class ProductValidator {

	public static void ValidateProductId(String productId, int length, boolean checkNullValue)
			throws InvalidInputParametersException {

		if (checkNullValue && (productId == null || productId.trim().isEmpty())) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validProductIdErrorCode,
					ProductValidatorConstants.validProductIdMessage);

		} else if (productId != null && productId.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validProductIdLengthErrorCode,
					ProductValidatorConstants.validProductIdLengthMessage);

		}

	}

	public static void ValidateProductName(String productName, int length) throws InvalidInputParametersException {
		if (productName == null || productName.trim().isEmpty()) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validProductNameErrorCode,
					ProductValidatorConstants.validProductNameMessage);

		} else if (productName.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validProductNameLengthErrorCode,
					ProductValidatorConstants.validProductNameLengthMessage);

		}

	}

	public static void ValidateMeasuringQuantity(String measuringQuantity, int length)
			throws InvalidInputParametersException {
		if (measuringQuantity != null && measuringQuantity.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validMeasuringQuantityLengthErrorCode,
					ProductValidatorConstants.validMeasuringQuantityLength);

		}
	}

	public static void ValidateMeasuringUnit(String measuringUnit, int length) throws InvalidInputParametersException {
		if (measuringUnit != null && measuringUnit.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validMeasuringQuantityLengthErrorCode,
					ProductValidatorConstants.validMeasuringQuantityLength);

		}
	}

	public static void ValidateDescription(String description, int length) throws InvalidInputParametersException {
		if (description != null && description.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validDescriptionLengthErrorCode,
					ProductValidatorConstants.validDescriptionLength);

		}

	}

	public static void validateProductPerUnitActualPrice(Float productPerUnitActualPrice, int length)
			throws InvalidInputParametersException {

		if (productPerUnitActualPrice != null && String.valueOf(productPerUnitActualPrice).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProductPerUnitActualPriceLengthErrorCode,
					ProductValidatorConstants.validateProductPerUnitActualPriceLengthMessage);
		}
	}

	public static void validateProductPerUnitCurrentPrice(Float productPerUnitCurrentPrice, int length)
			throws InvalidInputParametersException {

		if (productPerUnitCurrentPrice != null && String.valueOf(productPerUnitCurrentPrice).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProductPerUnitCurrentPriceLengthErrorCode,
					ProductValidatorConstants.validateProductPerUnitCurrentPriceLengthMessage);
		}
	}

	public static void validateProductLength(Float productLength, int length) throws InvalidInputParametersException {

		if (productLength != null && String.valueOf(productLength).length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validateProductLengthErrorCode,
					ProductValidatorConstants.validateProductLengthMessage);
		}
	}

	public static void validateHeight(Float height, int length) throws InvalidInputParametersException {

		if (height != null && String.valueOf(height).length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validateHeightLengthErrorCode,
					ProductValidatorConstants.validateHeightLengthMessage);
		}
	}

	public static void validateWidth(Float width, int length) throws InvalidInputParametersException {

		if (width != null && String.valueOf(width).length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validateWidthLengthErrorCode,
					ProductValidatorConstants.validateWidthLengthMessage);
		}
	}

	public static void validateDimensionUnit(String dimensionUnit, int length) throws InvalidInputParametersException {

		if (dimensionUnit != null && dimensionUnit.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validateDimensionUnitLengthErrorCode,
					ProductValidatorConstants.validateDimensionUnitLengthMessage);
		}
	}

	public static void validateMaterials(String materials, int length) throws InvalidInputParametersException {

		if (materials != null && materials.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validateMaterialsLengthErrorCode,
					ProductValidatorConstants.validateMaterialsLengthMessage);
		}
	}

	public static void validateColours(String colours, int length) throws InvalidInputParametersException {

		if (colours != null && colours.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validateColoursLengthErrorCode,
					ProductValidatorConstants.validateColoursLengthMessage);
		}
	}

	public static void validateProductFinish(String productFinish, int length) throws InvalidInputParametersException {
		if (productFinish != null && productFinish.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validateProductFinishLengthErrorCode,
					ProductValidatorConstants.validateProductFinishLengthMessage);

		}
	}

	public static void validateProdWholeTier1Price(Float prodWholeTier1Price, int length)
			throws InvalidInputParametersException {

		if (prodWholeTier1Price != null && String.valueOf(prodWholeTier1Price).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProdWholeTier1PriceLengthErrorCode,
					ProductValidatorConstants.validateProdWholeTier1PriceLengthMessage);
		}
	}

	public static void validateProdWholeTier2Price(Float prodWholeTier2Price, int length)
			throws InvalidInputParametersException {

		if (prodWholeTier2Price != null && String.valueOf(prodWholeTier2Price).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProdWholeTier2PriceLengthErrorCode,
					ProductValidatorConstants.validateProdWholeTier2PriceLengthMessage);
		}
	}

	public static void validateProdWholeTier1SalePrice(Float prodWholeTier1SalePrice, int length)
			throws InvalidInputParametersException {

		if (prodWholeTier1SalePrice != null && String.valueOf(prodWholeTier1SalePrice).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProdWholeTier1SalePriceLengthErrorCode,
					ProductValidatorConstants.validateProdWholeTier1SalePriceLengthMessage);
		}
	}

	public static void validateProdWholeTier2SalePrice(Float prodWholeTier2SalePrice, int length)
			throws InvalidInputParametersException {

		if (prodWholeTier2SalePrice != null && String.valueOf(prodWholeTier2SalePrice).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProdWholeTier2SalePriceLengthErrorCode,
					ProductValidatorConstants.validateProdWholeTier2SalePriceLengthMessage);
		}
	}

	public static void validateRetailTier1Price(Float prodRetailTier1Price, int length)
			throws InvalidInputParametersException {

		if (prodRetailTier1Price != null && String.valueOf(prodRetailTier1Price).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProdRetailTier1PriceLengthErrorCode,
					ProductValidatorConstants.validateProdRetailTier1PriceLengthMessage);
		}
	}

	public static void validateRetailTier2Price(Float prodRetailTier2Price, int length)
			throws InvalidInputParametersException {

		if (prodRetailTier2Price != null && String.valueOf(prodRetailTier2Price).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProdRetailTier2PriceLengthErrorCode,
					ProductValidatorConstants.validateProdRetailTier2PriceLengthMessage);
		}
	}

	public static void validateRetailTier1SalePrice(Float prodRetailTier1SalePrice, int length)
			throws InvalidInputParametersException {

		if (prodRetailTier1SalePrice != null && String.valueOf(prodRetailTier1SalePrice).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProdRetailTier1SalePriceLengthErrorCode,
					ProductValidatorConstants.validateProdRetailTier1SalePriceLengthMessage);
		}
	}

	public static void validateRetailTier2SalePrice(Float prodRetailTier2SalePrice, int length)
			throws InvalidInputParametersException {

		if (prodRetailTier2SalePrice != null && String.valueOf(prodRetailTier2SalePrice).length() > length) {
			throw new InvalidInputParametersException(
					ProductValidatorConstants.validateProdRetailTier2SalePriceLengthErrorCode,
					ProductValidatorConstants.validateProdRetailTier2SalePriceLengthMessage);
		}
	}

	public static void validateEta(String eta, int length) throws InvalidInputParametersException {

		if (eta != null && eta.length() > length) {
			throw new InvalidInputParametersException(ProductValidatorConstants.validateEtaLengthErrorCode,
					ProductValidatorConstants.validateEtaLengthMessage);

		}

	}

}
