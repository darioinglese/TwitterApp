package com.twitterapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Interest {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private InterestType type;
	private String owner;
	
	
	
	public String getOwner() {
		return owner;
	}

	public void setUsername(String owner) {
		this.owner = owner;
	}

	public InterestType getType() {
		return type;
	}

	public void setType(InterestType type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
