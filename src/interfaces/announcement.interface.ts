import Announcement from "../models/announcement";

export interface AnnouncementAttributes {
  id: string;
  link: string;
  title: string;
  content: string;
  date: number;
}

export interface AddAnnouncementResult {
  alreadyExists: Announcement | null;
}
