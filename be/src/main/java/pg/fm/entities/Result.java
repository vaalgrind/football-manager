package pg.fm.entities;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Result {

  private final Team team;
  private final Team away;
  private final int homeScore;
  private final int awayScore;

}
