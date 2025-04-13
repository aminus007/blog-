import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const settingsPath = path.join(process.cwd(), 'data', 'settings.json');

async function loadSettings() {
  try {
    const data = await fs.readFile(settingsPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

async function saveSettings(settings: any) {
  await fs.mkdir(path.dirname(settingsPath), { recursive: true });
  await fs.writeFile(settingsPath, JSON.stringify(settings, null, 2));
}

export async function GET() {
  const settings = await loadSettings();
  return NextResponse.json(settings);
}

export async function POST(request: Request) {
  try {
    const newSettings = await request.json();
    const currentSettings = await loadSettings();
    const updatedSettings = { ...currentSettings, ...newSettings };
    await saveSettings(updatedSettings);
    return NextResponse.json(updatedSettings);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
} 