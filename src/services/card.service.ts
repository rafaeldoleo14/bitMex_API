import {
  AddAnnouncementResult,
  AnnouncementAttributes,
} from "../interfaces/announcement.interface";
import Announcement from "../models/announcement";

const onGetAnnouncement = async (): Promise<Announcement[]> => {
  const announcements = await Announcement.findAll();

  return announcements;
};

const onSingleGetAnnouncement = async (
  id: string
): Promise<Announcement | null> => {
  const singleAnnouncement = await Announcement.findOne({
    where: {
      id,
    },
  });

  return singleAnnouncement;
};

const onAddAnnouncement = async (
  announcement: AnnouncementAttributes
): Promise<AddAnnouncementResult> => {
  const { id } = announcement;

  const alreadyExists = await Announcement.findOne({
    // to check the card already exists
    where: {
      id,
    },
  });

  return {
    alreadyExists,
  };
};

const onUpdateAnnouncement = async (
  announcement: AnnouncementAttributes,
  id: string
) => {
  const updateCard = await Announcement.update(announcement, {
    where: {
      id,
    },
  });

  return updateCard;
};

const onDeleteAnnouncement = async (id: string): Promise<Number> => {
  const deletedAnnouncement = await Announcement.destroy({
    where: {
      id,
    },
  });

  return deletedAnnouncement;
};

export {
  onGetAnnouncement,
  onSingleGetAnnouncement,
  onAddAnnouncement,
  onUpdateAnnouncement,
  onDeleteAnnouncement,
};
