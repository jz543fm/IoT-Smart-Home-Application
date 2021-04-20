package sk.tuke.fei.kpi.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import sk.tuke.fei.kpi.demo.dto.UserDTO;
import sk.tuke.fei.kpi.demo.model.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );

    User toUser(UserDTO userDTO);

    UserDTO toUserDTO(User user);

    UserViewDTO toUserViewDTO(User user);
}

