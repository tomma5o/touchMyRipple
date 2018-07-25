# Changelog
All notable changes to this project will be documented in this file.

## [2.6.11] - 2018-07-25
### Fixed
- Changed requestAnimation frame to a normal setTimeOut with delay of 50ms, for timing problems

## [2.6.01] - 2018-07-25
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