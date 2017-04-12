package com.example.demo.mapper;

import com.example.demo.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by Administrator on 2017/4/10.
 */
@Mapper
public interface  UserMapper {
    int save(User user);

    User selectById(String id);

    int updateById(User user);

    int deleteById(String id);

    List<User> queryAll();
}
