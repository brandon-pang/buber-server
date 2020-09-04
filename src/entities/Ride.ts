import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { rideStatus } from "src/types/types";
import User from "./User";

@Entity()
class Ride extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", enum: ["ACCEPTED", "FINSHED", "CANCELED", "REQUESTING", "ONROUTE"] })
    address: rideStatus;

    @Column({ type: "text" })
    status: string;

    @Column({ type: "text" })
    pickUpAddress: string;

    @Column({ type: "double precision", default: 0 })
    pickUpLat: number;

    @Column({ type: "double precision", default: 0 })
    pickUpLng: number;

    @Column({ type: "text" })
    dropOffAddress: string;

    @Column({ type: "double precision", default: 0 })
    dropOffLat: number;

    @Column({ type: "double precision", default: 0 })
    dropOffLng: number;

    @Column({ type: "double precision", default: 0 })
    price: number;

    @Column({ type: "text" })
    distance: string;

    @Column({ type: "text" })
    duration: string;
    @ManyToOne(type => User, user=>user.ridesAsPassenger)
    passenger:User;
    
    @ManyToOne(type => User, user=>user.ridesAsDriver)
    driver:User;
    
    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;


}
export default Ride;