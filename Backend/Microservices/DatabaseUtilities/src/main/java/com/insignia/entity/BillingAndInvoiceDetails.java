package com.insignia.entity;



import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@Entity
@Table(name="customer_invoice_details")
public class BillingAndInvoiceDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "invoice_number")
	private Long invoiceNumber;

	@Column(name = "customer_sequence_number",unique=true)
	private Long customerSequenceNumber;

	@Column(name = "order_id",unique=true)
	private Long orderId;

	@Column(name = "invoice_date")
	private Date invoiceDate;

	@Column(name = "due_date")
	private Date dueDate;

	@Column(name = "status")
	private String status;

	@Column(name = "date_of_payment")
	private Date dateOfPayment;

	@Column(name = "currency")
	private String currency;

	@Column(name = "mode_of_payment")
	private String modeOfPayment;


	@Override
	public String toString() {
		return "BillingAndInvoiceDetails [invoiceNumber=" + invoiceNumber + ", customerSequenceNumber="
				+ customerSequenceNumber + ", orderId=" + orderId + ", invoiceDate=" + invoiceDate + ", dueDate="
				+ dueDate + ", status=" + status
				+ ", dateOfPayment=" + dateOfPayment + ", currency=" + currency + ", modeOfPayment=" + modeOfPayment
				+ ", customerBasicDetails=" + "]";
	}

	public BillingAndInvoiceDetails()
	{
		
	}
	public BillingAndInvoiceDetails(Long customerSequenceNumber, Long orderId, Date invoiceDate,
			Date dueDate, String status, Date dateOfPayment,
			String currency, String modeOfPayment) {
		super();
		this.customerSequenceNumber = customerSequenceNumber;
		this.orderId = orderId;
		this.invoiceDate = invoiceDate;
		this.dueDate = dueDate;
		this.status = status;
		this.dateOfPayment = dateOfPayment;
		this.currency = currency;
		this.modeOfPayment = modeOfPayment;
	}
	
	public BillingAndInvoiceDetails(Long customerSequenceNumber,Long orderId,String status,Date dateOfPayment,String currency,String modeOfPayment)
	{
		this.customerSequenceNumber=customerSequenceNumber;
		this.orderId=orderId;
		this.status=status;
		this.dateOfPayment=dateOfPayment;
		this.currency=currency;
		this.modeOfPayment=modeOfPayment;
	}
	
	public BillingAndInvoiceDetails(Long customerSequenceNumber,Long orderId)
	{
		this.customerSequenceNumber=customerSequenceNumber;
		this.orderId=orderId;
	}
	
	public BillingAndInvoiceDetails(Long customerSequenceNumber)
	{
		this.customerSequenceNumber=customerSequenceNumber;
	}
	
	
}