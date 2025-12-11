import type { Project } from '@domain/entities/Project';
import { SKILL_ICONS } from './constants';

/**
 * Filter projects related to an experience/skill
 * @param projects Array of projects
 * @param relatedId ID to match against relatedTo field
 * @returns Filtered array of related projects
 */
export function filterRelatedProjects(projects: Project[], relatedId: string): Project[] {
  return projects.filter(p => p.relatedTo === relatedId);
}

/**
 * Get items with limited count
 * @param items Array of items
 * @param limit Maximum number of items
 * @returns Sliced array
 */
export function limitSkills<T>(items: T[], limit: number = 3): T[] {
  return items.slice(0, limit);
}

/**
 * Generate URL for skill icon from skillicons.dev
 * @param skillId Skill identifier
 * @returns URL to skill icon
 */
export function getSkillIconUrl(skillId: string): string {
  const iconName = SKILL_ICONS[skillId] || skillId;
  return `https://skillicons.dev/icons?i=${iconName}`;
}

/**
 * Render star rating as string
 * @param level 1-5 rating
 * @returns Star character repeated level times
 */
export function renderStars(level: number): string {
  return '★'.repeat(level);
}

/**
 * Sort skills by level and experience
 * @param skills Array of skills with level and yearsOfExperience
 * @returns Sorted array descending
 */
export function sortByLevelAndExperience<T extends { level: number; yearsOfExperience: number }>(
  skills: T[]
): T[] {
  return [...skills].sort((a, b) => b.level - a.level || b.yearsOfExperience - a.yearsOfExperience);
}
