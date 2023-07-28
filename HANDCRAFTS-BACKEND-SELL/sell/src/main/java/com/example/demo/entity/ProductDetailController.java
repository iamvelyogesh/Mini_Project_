package com.example.demo.entity;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controller.ProductDetailEntity;
import com.example.demo.service.ProductDetailService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/products")
public class ProductDetailController {

    private final ProductDetailService productDetailService;

    @Autowired
    public ProductDetailController(ProductDetailService productDetailService) {
        this.productDetailService = productDetailService;
    }

    @GetMapping
    public List<ProductDetailEntity> getAllProductDetails() {
        return productDetailService.getAllProductDetails();
    }

    @PostMapping
    public ProductDetailEntity createProductDetail(@RequestBody ProductDetailEntity productDetail) {
        return productDetailService.saveProductDetail(productDetail);
    }

}
