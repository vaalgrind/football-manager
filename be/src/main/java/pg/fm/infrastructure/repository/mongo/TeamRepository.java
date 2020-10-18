package pg.fm.infrastructure.repository.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pg.fm.entities.Team;

@Repository
public interface TeamRepository extends MongoRepository<Team, String> {
}
