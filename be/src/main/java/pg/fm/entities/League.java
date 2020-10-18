package pg.fm.entities;

import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class League {

  private final List<Team> teams;
  private final String name;
  private final int division;
  private final Schedule schedule;

}
