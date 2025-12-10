package com.gowave.user_service.security;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

@Component
public class JwtUtil {

    private static final String SECRET = "GoWaveOfficial";
    private static final long EXPIRE = 24 * 60 * 60 * 1000;
    private static final Algorithm algorithm = Algorithm.HMAC512(SECRET);

    public static String generateToken(String username, String role) {
        Date now = new Date();
        Date expry = new Date(now.getTime() + EXPIRE);

        return JWT.create().withSubject(username).withClaim("role", role)
                .withIssuedAt(now).withExpiresAt(expry).sign(algorithm);

    }

}
