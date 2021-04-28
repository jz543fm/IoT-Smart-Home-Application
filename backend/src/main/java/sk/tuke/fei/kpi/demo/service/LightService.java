package sk.tuke.fei.kpi.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;
import sk.tuke.fei.kpi.demo.model.Light;
import sk.tuke.fei.kpi.demo.repository.LightRepository;

@Service
public class LightService extends CrudService<Light> {

    private final LightRepository lightRepository;

    @Autowired
    public LightService(LightRepository lightRepository){
        this.lightRepository = lightRepository;
    }

    public Page<Light> findAllByCategoryId(Long id, Pageable pageable) {
        return lightRepository.findLightByIdContaining(id, pageable);
    }

    public Page<Light> findLightByNameContaining(String searchWord, Pageable pageable){
        return lightRepository.findLightByNameContaining(searchWord, pageable);
    }

    @Override
    protected PagingAndSortingRepository<Light, Long> getRepository() {
        return lightRepository;
    }
}
