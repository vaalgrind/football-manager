package pg.fm.infrastructure.repository.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pg.fm.entities.League;

@Repository
public interface LeagueRepository extends MongoRepository<League, String> {
}
