package pg.fm.infrastructure.repository.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pg.fm.entities.Result;

@Repository
public interface ResultRepository extends MongoRepository<Result, String> {
}
