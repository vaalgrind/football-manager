package pg.fm.infrastructure.repository.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pg.fm.entities.Schedule;

@Repository
public interface ScheduleRepository extends MongoRepository<Schedule, String> {
}
