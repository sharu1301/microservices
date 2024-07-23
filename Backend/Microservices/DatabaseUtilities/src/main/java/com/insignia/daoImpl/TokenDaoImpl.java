package com.insignia.daoImpl;

import com.insignia.constants.CommonConstant;
import com.insignia.constants.SecretKeyConstant;
import com.insignia.customExceptions.TokenExpiredException;
import com.insignia.daoInterface.TokenDaoInterface;
import com.insignia.repo.TokensEntityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public class TokenDaoImpl implements TokenDaoInterface {

    @Autowired
    private TokensEntityRepo tokenRepo;

    public void checkTokenValidity(Long customer_sequence_number,
								   Integer expirationDuration)
            throws TokenExpiredException {

        if (tokenRepo.checkTokenValidity(customer_sequence_number,
				new Date()).isEmpty()) {
            throw new TokenExpiredException(CommonConstant.validateTokenErrorCode, CommonConstant.validateToken);

        } else {

            if (expirationDuration != null && expirationDuration > 0) {
                tokenRepo.updateTokenValidity((new Date(System.currentTimeMillis() + SecretKeyConstant.EXPIRY_DURATION * expirationDuration)),
                        new Date(), customer_sequence_number);
            }
        }
    }
}
