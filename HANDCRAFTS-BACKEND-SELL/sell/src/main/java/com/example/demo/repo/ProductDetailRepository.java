package com.example.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.controller.ProductDetailEntity;

@Repository
public interface ProductDetailRepository extends JpaRepository<ProductDetailEntity, Long> {
}
