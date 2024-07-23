import { Request, Response } from "express";
import Announcement from "../models/announcement";
import * as service from "../services/card.service";
import {
  handleError,
  middlewareError,
  notFoundAnnouncementError,
} from "../utils/handleErrors.util";

const getAllAnnouncementCtrl = async ({ body }: Request, res: Response) => {
  try {
    Announcement.sync();
    const announcements = await service.onGetAnnouncement();

    res.status(200).json({
      ok: true,
      msg: "Get all announcement is successfull",
      announcements,
    });
  } catch (error) {
    console.log("object");
    console.log(error);
    handleError(res, "Get all announcement is not posible");
  }
};

const getSingleAnnouncementCtrl = async (
  { params }: Request,
  res: Response
) => {
  try {
    const { id } = params;

    const singleAnnouncement = await service.onSingleGetAnnouncement(id);

    if (
      notFoundAnnouncementError(
        res,
        singleAnnouncement,
        "Single announcement not found"
      )
    )
      return;

    res.status(200).json({
      ok: true,
      msg: "Get single announcement is successfull",
      singleAnnouncement,
    });
  } catch (error) {
    handleError(res, "Get single announcement is not posible");
  }
};

const addAnnouncementCtrl = async (req: Request, res: Response) => {
  try {
    if (middlewareError(req, res)) return;

    const { alreadyExists } = await service.onAddAnnouncement(req.body);

    if (alreadyExists) {
      return res.status(404).json({
        ok: false,
        error: "Announcement already exists",
      });
    }

    const newAnnouncement = await Announcement.create(req.body);

    res.status(200).json({
      ok: true,
      msg: "Announcement was added!!!",
      newAnnouncement,
    });
  } catch (err: any) {
    handleError(res, err.toString());
  }
};

const updateAnnouncementCtrl = async (req: Request, res: Response) => {
  try {
    if (middlewareError(req, res)) return;

    const { id } = req.params;
    const announcement = req.body;

    const updatedAnnouncement = await service.onUpdateAnnouncement(
      announcement,
      id
    );

    const affectedCount: number = updatedAnnouncement[0];

    if (affectedCount == 0) {
      return res.status(404).json({
        ok: false,
        error: "Announcement not found",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Update announcement is successfull",
      updatedAnnouncement,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteAnnouncementCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedAnnouncement = await service.onDeleteAnnouncement(id);

    if (
      notFoundAnnouncementError(
        res,
        deletedAnnouncement,
        "Announcement not found"
      )
    )
      return;

    res.status(200).json({
      ok: true,
      msg: "Announcement was deleted!!!",
      deletedAnnouncement,
    });
  } catch (error) {}
};

export {
  getAllAnnouncementCtrl,
  getSingleAnnouncementCtrl,
  addAnnouncementCtrl,
  updateAnnouncementCtrl,
  deleteAnnouncementCtrl,
};
