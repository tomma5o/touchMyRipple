# Changelog
All notable changes to this project will be documented in this file.

## [2.6.0] - 2018-07-24
### Added
- React HOC for add ripple in every element you want
- Helper function for creating a react folder when you run ```npm run build``` in local

### Changed
- File Tree
- Dist folder changed to lib

## [2.0.0] - 2018-07-23
### Added
- Gzipped Version

### Changed
- Changed event (only desktop) from ```Event.x``` to ```Event.clientX``` (more stable)

### Fixed
- Bug in event bubbling - now if we have a span inside a button the ripple start in the right element

## [1.6.6] - 2018-07-18

### Fixed
- Small refactor in the core