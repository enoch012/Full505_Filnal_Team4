package com.bitc.full505_final_team4.data.entity;

import jakarta.persistence.*;
import lombok.*;
import org.checkerframework.checker.units.qual.A;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Table(name = "member")
@Builder
@Getter
@Setter
@ToString
@DynamicInsert
@NoArgsConstructor
@AllArgsConstructor
public class MemberEntity {

  @Id
  @Column(nullable = false, unique = true, length = 45)
  private String id;

  @Column(nullable = false, length = 100)
  private String pw;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false, unique = true, length = 100)
  private String nickname;

  @Column(nullable = false)
  private int gender;

  @Column(nullable = false)
  private String birthday;

  @Column(length = 100)
  private String oFile;

  @Column(length = 100)
  private String sFile;

  @Column(nullable = false)
  @ColumnDefault("1")
  private int grade;

  @Column(nullable = false)
  @ColumnDefault("N")
  private String deletedYn;

}
