package pg.fm.entities;

import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class Schedule {

  private final League league;
  private final List<Match> matches;

}
