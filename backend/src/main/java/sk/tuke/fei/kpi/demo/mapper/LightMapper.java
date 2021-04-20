package sk.tuke.fei.kpi.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import sk.tuke.fei.kpi.demo.dto.LightDTO;
import sk.tuke.fei.kpi.demo.dto.UserDTO;
import sk.tuke.fei.kpi.demo.model.Light;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LightMapper {

    LightMapper INSTANCE = Mappers.getMapper( LightMapper.class );

    Light toLight(LightDTO lightDTO);

    LightDTO toLightDTO(Light light);

    LightViewDTO toLightViewDTO(Light light);

    List<LightViewDTO> toProductViewDTOs(List<Light> lights);


}