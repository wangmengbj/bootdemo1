package com.example.demo.dao;

import com.example.demo.entity.User;

import java.util.List;

/**
 * Created by USER on 2017/5/23.
 */
public interface UserMapper {
    List<User> getAll();
    User getOne(String id);
    void insert(User user);
    void update(User user);
    void delete(String id);
}
