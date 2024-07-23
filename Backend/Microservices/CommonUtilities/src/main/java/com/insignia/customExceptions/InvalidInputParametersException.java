package com.insignia.customExceptions;

public class InvalidInputParametersException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String strMsg;
	private String errorCode;
	
	public InvalidInputParametersException(String strMsg) {
		super();
		this.strMsg = strMsg;
	}
	
	public InvalidInputParametersException(String errorCode, String strMsg) {
		super();
		this.strMsg = strMsg;
		this.errorCode=errorCode;
	}

	public String getStrMsg() {
		return strMsg;
	}

	public void setStrMsg(String strMsg) {
		this.strMsg = strMsg;
	}

	public String getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	
 
}
