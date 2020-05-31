import { Sequelize, Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from "sequelize-typescript"

export interface PayerI {
  id?: number | null,
  first_name: string,
  last_name: string,
  email: string,
  identification_number: string,
  identification_type: string,
  phone_number: string,
}

@Table(
  {
    tableName: "payer",
    timestamps: true
  }
)
export default class Payer extends Model implements PayerI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number

  @AllowNull(false)
  @NotEmpty
  @Column
  first_name: string

  @AllowNull(false)
  @NotEmpty
  @Column
  last_name: string

  @AllowNull(false)
  @NotEmpty
  @Column
  email: string

  @AllowNull(false)
  @NotEmpty
  @Column
  identification_number: string

  @AllowNull(false)
  @NotEmpty
  @Column
  identification_type: string

  @AllowNull(false)
  @NotEmpty
  @Column
  phone_number: string
}
