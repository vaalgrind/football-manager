package pg.fm.infrastructure.repository.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pg.fm.entities.Match;

@Repository
public interface MatchRepository extends MongoRepository<Match, String> {
}
