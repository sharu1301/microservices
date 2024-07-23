package com.insignia.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.insignia.daoInterface.JwtDao;
import com.insignia.entity.TokensEntity;
import com.insignia.model.AuthenticationRequest;
import com.insignia.model.AuthenticationResponse;
import com.insignia.serviceImpl.IJwtServiceImpl;

@ExtendWith(MockitoExtension.class)
public class IJwtServiceImplTest {

	@InjectMocks
	private IJwtServiceImpl iJwtServiceImpl;

	@Mock
	private JwtDao jwtdao;
	
	List<TokensEntity> listOfEntity = new ArrayList<>();
	AuthenticationResponse authRes = new AuthenticationResponse();
	AuthenticationRequest authReq = new AuthenticationRequest();
	Optional<List<TokensEntity>> tokenDetails = null;

	@BeforeEach
	public void initialization() {
		TokensEntity tke = new TokensEntity();
		tke.setIsLongLivedToken(false);
		tke.setTokenSequenceNumber(9l);
		tke.setIsLongLivedToken(false);
		tke.setIsTokenExpired(false);
		tke.setTokenCreatedAt(new Date());
		tke.setTokenDetails("H245");
		tke.setTokenExpiresAt(new Date());
		tke.setTokenRevokedAt(null);
		tke.setTokenType("jwt");
		listOfEntity.add(tke);
		tokenDetails = Optional.ofNullable(listOfEntity.isEmpty() ? null : listOfEntity);

		authReq.setApplicationId("112");
		authReq.setPassword("Insignia@123");
		authReq.setRememberMeSelected(false);
		authReq.setTenantId("254");
		authReq.setUserId("125");
		authReq.setExpirationTime(15);

		authRes.setCustomerSeqNumber(12l);
		authRes.setToken("25452");
		authRes.setType("JWT");
	}
    @Test
	public void testFetchExistTokenIfPresent() throws Exception {

		when(jwtdao.fetchTokendetails(authRes.getCustomerSeqNumber())).thenReturn(tokenDetails);

		AuthenticationResponse fetchExistTokenIfPresent = iJwtServiceImpl.fetchExistTokenIfPresent(authRes, authReq);

		assertNotNull(fetchExistTokenIfPresent);
	}
    
    @Test
  	public void testFetchExistTokenIsAlived() throws Exception {
    	tokenDetails.get().get(0).setIsLongLivedToken(true);
  		when(jwtdao.fetchTokendetails(authRes.getCustomerSeqNumber())).thenReturn(tokenDetails);

  		AuthenticationResponse fetchExistTokenIfPresent = iJwtServiceImpl.fetchExistTokenIfPresent(authRes, authReq);

  		assertNotNull(fetchExistTokenIfPresent);
  	}

    @Test
    public void updateTokenDetails() {
    	Long customerSequenceNumber = 8L;
    	
    	doNothing().when(jwtdao).updateTokenDetails(authReq.getExpirationTime(), authReq.isRememberMeSelected(), "JWT", customerSequenceNumber);
    	
    	iJwtServiceImpl.updateTokenDetails(authReq.getExpirationTime(), authReq.isRememberMeSelected(), "JWT", customerSequenceNumber);
    	
    	verify(jwtdao,times(1)).updateTokenDetails(authReq.getExpirationTime(), authReq.isRememberMeSelected(), "JWT", customerSequenceNumber);
}
    
    @Test
    public void deleteTokenDetails() {
    	
    	doNothing().when(jwtdao).deleteTokenDetails(authRes.getCustomerSeqNumber());
    	
    	iJwtServiceImpl.deleteTokenDetails(authRes.getCustomerSeqNumber());
    	
    	verify(jwtdao,times(1)).deleteTokenDetails(authRes.getCustomerSeqNumber());
    }
    
    @Test
    public void createTokenDetails() {
    	Long customerSequenceNumber = 8L;
    	doNothing().when(jwtdao).createTokenDetails(authReq.getExpirationTime(), authReq.isRememberMeSelected(), customerSequenceNumber);
    	
    	iJwtServiceImpl.createTokenDetails(authReq.getExpirationTime(), authReq.isRememberMeSelected(), customerSequenceNumber);
    	
    	verify(jwtdao,times(1)).createTokenDetails(authReq.getExpirationTime(), authReq.isRememberMeSelected(), customerSequenceNumber);
    }
    
    @Test
   	public void testFetchExistTokenIfNotCreate() throws Exception {
    	
     	tokenDetails.get().get(0).setIsLongLivedToken(false);
   		when(jwtdao.fetchTokendetails(authRes.getCustomerSeqNumber())).thenReturn(Optional.ofNullable(null));

   		AuthenticationResponse fetchExistTokenIfPresent = iJwtServiceImpl.fetchExistTokenIfPresent(authRes, authReq);

   		assertNotNull(fetchExistTokenIfPresent);
   	}
    
   
}
    
