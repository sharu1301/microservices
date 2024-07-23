package com.insignia.validations;

import com.insignia.constants.CommonConstant;
import com.insignia.constants.CustomerBasicDetailsConstants;
import com.insignia.customExceptions.InvalidInputParametersException;

public class CommonValidation {

	public static void validateApplicationId(String applicationId) throws InvalidInputParametersException {

		if (applicationId == null || applicationId.trim().isEmpty()) {
			throw new InvalidInputParametersException(CommonConstant.validApplicationIdErrorCode,
					CommonConstant.validApplicationId);

		} else if (applicationId.length() > CommonConstant.applicationIdlength) {
			throw new InvalidInputParametersException(CommonConstant.validApplicationIdLengthErrorCode,
					CommonConstant.validApplicationIdLength);

		} else if (!applicationId.matches(CustomerBasicDetailsConstants.regularExpression)) {
			throw new InvalidInputParametersException(CommonConstant.validApplicationIdInvalidCharactersErrorCode,
					CommonConstant.validApplicationIdExpression);

		}

	}

	public static void validateTenantId(String tenantId) throws InvalidInputParametersException {

		if (tenantId == null || tenantId.trim().isEmpty()) {
			throw new InvalidInputParametersException(CommonConstant.validTenantIdErrorCode,
					CommonConstant.validTenantId);

		} else if (tenantId.length() > CommonConstant.tenantIdlength) {
			throw new InvalidInputParametersException(CommonConstant.validTenantIdLengthErrorCode,
					CommonConstant.validTenantIdLength);

		} else if (!tenantId.matches(CustomerBasicDetailsConstants.regularExpression)) {
			throw new InvalidInputParametersException(CommonConstant.validTenantIdInvalidCharactersErrorCode,
					CommonConstant.validTenantIdExpression);
		}

	}
	public static void validateApplicatinIdAndTenantId(String applicationId, String tenantId) throws InvalidInputParametersException {
		validateApplicationId(applicationId);
		validateTenantId(tenantId);
		
	}

}
