package com.example.app.entity;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Type;


@Entity
public class Bales {
	@Id
	private String uuid;
	private int bale_no;
	private String branchName;
	private String centerName;
	private String cropYear;
	private String ginnerName;
	private String address;
	private String varity;
	private int lotNo;
	private float pressWeight;
	private int pressRunningNum;
	private String pressMachineNumber;
	private String CCIHeapNo;
	private Date CCIHeapDate;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "uuid")
	List<BalesTracking> balesTracking;
	
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public int getBale_no() {
		return bale_no;
	}
	public void setBale_no(int bale_no) {
		this.bale_no = bale_no;
	}
	public String getBranchName() {
		return branchName;
	}
	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public String getCropYear() {
		return cropYear;
	}
	public void setCropYear(String cropYear) {
		this.cropYear = cropYear;
	}
	public String getGinnerName() {
		return ginnerName;
	}
	public void setGinnerName(String ginnerName) {
		this.ginnerName = ginnerName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getVarity() {
		return varity;
	}
	public void setVarity(String varity) {
		this.varity = varity;
	}
	public int getLotNo() {
		return lotNo;
	}
	public void setLotNo(int lotNo) {
		this.lotNo = lotNo;
	}
	public float getPressWeight() {
		return pressWeight;
	}
	public void setPressWeight(float pressWeight) {
		this.pressWeight = pressWeight;
	}
	public int getPressRunningNum() {
		return pressRunningNum;
	}
	public void setPressRunningNum(int pressRunningNum) {
		this.pressRunningNum = pressRunningNum;
	}
	public String getPressMachineNumber() {
		return pressMachineNumber;
	}
	public void setPressMachineNumber(String pressMachineNumber) {
		this.pressMachineNumber = pressMachineNumber;
	}
	public String getCCIHeapNo() {
		return CCIHeapNo;
	}
	public void setCCIHeapNo(String cCIHeapNo) {
		CCIHeapNo = cCIHeapNo;
	}
	public Date getCCIHeapDate() {
		return CCIHeapDate;
	}
	public void setCCIHeapDate(Date cCIHeapDate) {
		CCIHeapDate = cCIHeapDate;
	}
	public Bales(String uuid, int bale_no, String branchName, String centerName, String cropYear, String ginnerName,
			String address, String varity, int lotNo, float pressWeight, int pressRunningNum, String pressMachineNumber,
			String cCIHeapNo, Date cCIHeapDate) {
		super();
		this.uuid = uuid;
		this.bale_no = bale_no;
		this.branchName = branchName;
		this.centerName = centerName;
		this.cropYear = cropYear;
		this.ginnerName = ginnerName;
		this.address = address;
		this.varity = varity;
		this.lotNo = lotNo;
		this.pressWeight = pressWeight;
		this.pressRunningNum = pressRunningNum;
		this.pressMachineNumber = pressMachineNumber;
		this.CCIHeapNo = cCIHeapNo;
		this.CCIHeapDate = cCIHeapDate;
	}
	
	public Bales() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Bales [uuid=" + uuid + ", bale_no=" + bale_no + ", branchName=" + branchName + ", centerName="
				+ centerName + ", cropYear=" + cropYear + ", ginnerName=" + ginnerName + ", address=" + address
				+ ", varity=" + varity + ", lotNo=" + lotNo + ", pressWeight=" + pressWeight + ", pressRunningNum="
				+ pressRunningNum + ", pressMachineNumber=" + pressMachineNumber + ", CCIHeapNo=" + CCIHeapNo
				+ ", CCIHeapDate=" + CCIHeapDate + "]";
	}
	

}

