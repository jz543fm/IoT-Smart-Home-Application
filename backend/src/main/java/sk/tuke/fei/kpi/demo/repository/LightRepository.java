package sk.tuke.fei.kpi.demo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import sk.tuke.fei.kpi.demo.model.Light;

public interface LightRepository extends PagingAndSortingRepository<Light, Long> {

    Page<Light> findAll(Pageable pageable);

    Page<Light> findLightByNameContaining(String searchWord, Pageable pageable);

    Page<Light> findLightByIdContaining(Long id, Pageable pageable);

}
