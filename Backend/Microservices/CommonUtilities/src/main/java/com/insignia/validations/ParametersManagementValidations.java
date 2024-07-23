package com.insignia.validations;

import com.insignia.constants.ParametersManagementConstants;
import com.insignia.customExceptions.InvalidInputParametersException;

public class ParametersManagementValidations {
	

	// Measurement Units
	public static void ValidateUnitName(String unitName, int length, boolean checkNullValue)
			throws InvalidInputParametersException {
		if (checkNullValue && (unitName == null || unitName.trim().isEmpty())) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateUnitNameErrorCode,
					ParametersManagementConstants.validateUnitNameMessage);

		} else if (unitName != null && unitName.length() > length) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateUnitNameLengthErrorCode,
					ParametersManagementConstants.validateUnitNameLengthMessage);

		}

	}

	public static void ValidateUnitDescription(String unitDescription, int length)
			throws InvalidInputParametersException {
		if (unitDescription != null && unitDescription.length() > length) {
			throw new InvalidInputParametersException(
					ParametersManagementConstants.validateUnitDescriptionLengthErrorCode,
					ParametersManagementConstants.validateUnitDescriptionLengthMessage);

		}

	}

	// Product Color
	public static void ValidateColourName(String colourName, int length, boolean checkNullValue)
			throws InvalidInputParametersException {
		if (checkNullValue && (colourName == null || colourName.trim().isEmpty())) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateColourNameErrorCode,
					ParametersManagementConstants.validateColourNameMessage);

		} else if (colourName != null && colourName.length() > length) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateColourNameLengthErrorCode,
					ParametersManagementConstants.validateColourNameLengthMessage);

		}

	}

	public static void ValidateColourDescription(String colourDescription, int length)
			throws InvalidInputParametersException {
		if (colourDescription != null && colourDescription.length() > length) {
			throw new InvalidInputParametersException(
					ParametersManagementConstants.validateColourDescriptionLengthErrorCode,
					ParametersManagementConstants.validateColourDescriptionLengthMessage);

		}

	}

	// Product Family
	public static void ValidateFamilyName(String familyName, int length, boolean checkNullValue)
			throws InvalidInputParametersException {
		if (checkNullValue && (familyName == null || familyName.trim().isEmpty())) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateFamilyNameErrorCode,
					ParametersManagementConstants.validateFamilyNameMessage);

		} else if (familyName != null && familyName.length() > length) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateFamilyNameLengthErrorCode,
					ParametersManagementConstants.validateFamilyNameLengthMessage);

		}

	}

	public static void ValidateFamilyDescription(String familyDescription, int length)
			throws InvalidInputParametersException {
		if (familyDescription != null && familyDescription.length() > length) {
			throw new InvalidInputParametersException(
					ParametersManagementConstants.validateFamilyDescriptionLengthErrorCode,
					ParametersManagementConstants.validateFamilyDescriptionLengthMessage);

		}

	}

	// Product Material
	public static void ValidateMaterialName(String materialName, int length, boolean checkNullValue)
			throws InvalidInputParametersException {
		if (checkNullValue && (materialName == null || materialName.trim().isEmpty())) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateMaterialNameErrorCode,
					ParametersManagementConstants.validateMaterialNameMessage);

		} else if (materialName != null && materialName.length() > length) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateMaterialNameLengthErrorCode,
					ParametersManagementConstants.validateMaterialNameLengthMessage);

		}

	}

	public static void ValidateMaterialDescription(String materialDescription, int length)
			throws InvalidInputParametersException {
		if (materialDescription != null && materialDescription.length() > length) {
			throw new InvalidInputParametersException(
					ParametersManagementConstants.validateMaterialDescriptionLengthErrorCode,
					ParametersManagementConstants.validateMaterialDescriptionLengthMessage);

		}

	}
	// Product Brand
	public static void ValidateBrandName(String brandName, int length, boolean checkNullValue)
			throws InvalidInputParametersException {
		if (checkNullValue && (brandName == null || brandName.trim().isEmpty())) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateBrandNameErrorCode,
					ParametersManagementConstants.validateBrandNameMessage);

		} else if (brandName != null && brandName.length() > length) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateBrandNameLengthErrorCode,
					ParametersManagementConstants.validateBrandNameLengthMessage);

		}

	}

	public static void ValidateBrandDescription(String brandDescription, int length)
			throws InvalidInputParametersException {
		if (brandDescription != null && brandDescription.length() > length) {
			throw new InvalidInputParametersException(
					ParametersManagementConstants.validateBrandDescriptionLengthErrorCode,
					ParametersManagementConstants.validateBrandDescriptionLengthMessage);

		}

	}
	
	// Product Catalog
	public static void ValidateCatalogueName(String catalogueName, int length, boolean checkNullValue)
			throws InvalidInputParametersException {
		if (checkNullValue && (catalogueName == null || catalogueName.trim().isEmpty())) {
			throw new InvalidInputParametersException(ParametersManagementConstants.validateCatalogueNameErrorCode,
					ParametersManagementConstants.validateCatalogueNameMessage);

		} else if (catalogueName != null && catalogueName.length() > length) {
			throw new InvalidInputParametersException(
					ParametersManagementConstants.validateCatalogueNameLengthErrorCode,
					ParametersManagementConstants.validateCatalogueNameLengthMessage);

		}

	}

	public static void ValidateCatalogueDescription(String catalogueDescription, int length)
			throws InvalidInputParametersException {
		if (catalogueDescription != null && catalogueDescription.length() > length) {
			throw new InvalidInputParametersException(
					ParametersManagementConstants.validateCatalogueDescriptionLengthErrorCode,
					ParametersManagementConstants.validateCatalogueDescriptionLengthMessage);
		}

	}
}
