import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Category extends BaseModel {
  public static table = 'categories'
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'name' })
  public name: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
