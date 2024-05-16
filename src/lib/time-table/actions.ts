"use server";

import { getSession } from "src/lib/auth";
import dbConnect from "src/lib/dbConnect";
import Timetable, { ITimetable, RawTimetable, TimeTableWithID } from 'src/models/time-table';

export async function getTimeTable(department_code: string, year: number, semester: number):Promise<TimeTableWithID> {

    try {
        await dbConnect();
        // Find the timetable by department code, year and semester
        const timetable = await Timetable.findOne({
            department_code: department_code,
            year: year,
            semester: semester
        });

        if (!timetable) {
            return Promise.reject("Timetable not found");
        }

        return Promise.resolve(JSON.parse(JSON.stringify(timetable)));
    } catch (err) {
        console.error(err);
        return Promise.reject('Failed to fetch timetable');
    }

}
export async function getAllTimeTables() {
    try {
        await dbConnect();

        // Find all timetables
        const timetables = await Timetable.find({});

        return Promise.resolve(JSON.parse(JSON.stringify(timetables)));
    } catch (err) {
        console.error(err);
        return Promise.reject('Failed to fetch timetables');
    }

}
export async function createTimeTable(timetableData: RawTimetable) {
    // const session = await getSession();
    // if (!session) {
    //     return Promise.reject("You need to be logged in to view the timetable");
    // }
    try {
        // if (!session.user.roles.includes("admin") && !session.user.roles.includes("faculty") && !session.user.roles.includes("cr") || !session.user.roles.includes("moderator")) {
        //     return Promise.reject("Student can't create a timetable");
        // }

        // Validate the timetable data
        if (!timetableData.department_code || !timetableData.sectionName || !timetableData.year || !timetableData.semester || !timetableData.schedule) {
            return Promise.reject('Invalid timetable data');
        }
        await dbConnect();


        const existingTimetable = await Timetable.findOne({
            department_code: timetableData.department_code,
            sectionName: timetableData.sectionName,
            year: timetableData.year,
            semester: timetableData.semester
        });
        if (existingTimetable) {
            return Promise.reject('Timetable already exists');
        }

        // Create a new timetable document
        const newTimetable = new Timetable(timetableData);

        // Save the timetable document
        await newTimetable.save();

        return Promise.resolve('Timetable created successfully');
    } catch (err) {
        console.error(err);
        return Promise.reject('Failed to create timetable');
    }
}
export async function deleteTimeTable(timetableId: string) {
    const session = await getSession();

    if (!session) {
        return Promise.reject("You need to be logged in to delete a timetable");
    }

    try {
        if (!session.user.roles.includes("admin") && !session.user.roles.includes("faculty") && !session.user.roles.includes("cr") && !session.user.roles.includes("moderator")) {
            return Promise.reject("Student can't delete a timetable");
        }
        await dbConnect();


        // Find the timetable by ID
        const timetable = await Timetable.findById(timetableId);

        if (!timetable) {
            return Promise.reject("Timetable not found");
        }

        // Delete the timetable
        await timetable.deleteOne()

        return Promise.resolve('Timetable deleted successfully');
    } catch (err) {
        console.error(err);
        return Promise.reject('Failed to delete timetable');
    }
}
export async function updateTimeTable(timetableId: string, updatedTimetableData: ITimetable) {
    const session = await getSession();

    if (!session) {
        return Promise.reject("You need to be logged in to update a timetable");
    }

    try {
        if (!session.user.roles.includes("admin") && !session.user.roles.includes("faculty") && !session.user.roles.includes("cr") && !session.user.roles.includes("moderator")) {
            return Promise.reject("Student can't update a timetable");
        }
        await dbConnect();

        // Find the timetable by ID
        const timetable = await Timetable.findById(timetableId);

        if (!timetable) {
            return Promise.reject("Timetable not found");
        }

        // Update the timetable fields
        timetable.department_code = updatedTimetableData.department_code;
        timetable.sectionName = updatedTimetableData.sectionName;
        timetable.year = updatedTimetableData.year;
        timetable.semester = updatedTimetableData.semester;
        timetable.schedule = updatedTimetableData.schedule;

        // Save the updated timetable
        await timetable.save();

        return Promise.resolve('Timetable updated successfully');
    } catch (err) {
        console.error(err);
        return Promise.reject('Failed to update timetable');
    }
}