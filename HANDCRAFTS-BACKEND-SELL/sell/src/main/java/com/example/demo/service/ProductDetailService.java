package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controller.ProductDetailEntity;
import com.example.demo.repo.ProductDetailRepository;

@Service
public class ProductDetailService {

    private final ProductDetailRepository productDetailRepository;

    @Autowired
    public ProductDetailService(ProductDetailRepository productDetailRepository) {
        this.productDetailRepository = productDetailRepository;
    }

    public List<ProductDetailEntity> getAllProductDetails() {
        return productDetailRepository.findAll();
    }

    public ProductDetailEntity saveProductDetail(ProductDetailEntity productDetail) {
        return productDetailRepository.save(productDetail);
    }
    
}
