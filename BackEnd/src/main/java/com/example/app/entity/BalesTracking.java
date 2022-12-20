package com.example.app.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class BalesTracking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long balesTrackingId;
	private String scanLocation;
	private String scanStatus;
	private float weight;
	private String remark;
	private String userName;
	private Date ScanTime;
	private String uuid;
	private String deviceId;
	private String deviceName;


	
	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getScanLocation() {
		return scanLocation;
	}

	public void setScanLocation(String scanLocation) {
		this.scanLocation = scanLocation;
	}

	public String getScanStatus() {
		return scanStatus;
	}

	public void setScanStatus(String scanStatus) {
		this.scanStatus = scanStatus;
	}

	public float getWeight() {
		return weight;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Date getScanTime() {
		return ScanTime;
	}

	public void setScanTime(Date scanTime) {
		ScanTime = scanTime;
	}

	public String getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}

	public String getDeviceName() {
		return deviceName;
	}

	public void setDeviceName(String deviceName) {
		this.deviceName = deviceName;
	}

	@Override
	public String toString() {
		return "BalesTracking [balesTrackingId=" + balesTrackingId + ", scanLocation=" + scanLocation + ", scanStatus="
				+ scanStatus + ", weight=" + weight + ", remark=" + remark + ", userName=" + userName + ", ScanTime="
				+ ScanTime + ", uuid=" + uuid + ", deviceId=" + deviceId + ", deviceName=" + deviceName + "]";
	}


	
}
