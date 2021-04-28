package sk.tuke.fei.kpi.demo.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public abstract class CrudService<T> {
    protected abstract PagingAndSortingRepository<T, Long> getRepository();

    public T save(T entity) {
        return getRepository().save(entity);
    }


    public List<T> save(Collection<T> entities) {
        PagingAndSortingRepository<T, Long> repository = getRepository();
        Iterable<T> savedEntities = repository.saveAll(entities);
        return StreamSupport.stream(savedEntities.spliterator(), false)
                .collect(Collectors.toList());
    }

    public Optional<T> findById(Long id) {
        return getRepository().findById(id);
    }

    public Page<T> findAll(Pageable pageable) {
        return getRepository().findAll(pageable);
    }

    public List<T> findAll() {
        Iterable<T> all = getRepository().findAll();
        return StreamSupport.stream(all.spliterator(), false)
                .collect(Collectors.toList());
    }

    public Long getCount() {
        return getRepository().count();
    }

    public void delete(T entity) {
        getRepository().delete(entity);
    }

    public void delete(Long id) {
        getRepository().deleteById(id);
    }

}
