# ROSS conf

Ruby Open Source Software ([ROSS conf](http://rossconf.io)) is a one day conference bringing Open Source software maintainers and developers with a heart for outstanding and free software together in one room. Or multiple rooms, if need be.

Five maintainers or main contributors to major Open Source projects will get the chance to recruit highly motivated developers to contribute to their project during the hackathon part of the conference.

# Working on the site

If you'd like to improve http://rossconf.io, add an event or fix a bug we are happy to get your Pull Request (see **Contributing** for more on that). To give you a jumpstart here is an intro to how the site works.

## Run Site

### Requirements

  * [Ruby](https://www.ruby-lang.org/) and [Bundler](http://bundler.io/)
  * [Bower](http://bower.io/)

This site is built with [middleman](http://middlemanapp.com).
To run a local server that watches for changes from your command line, run:

```
$ bundle install
$ bower install # installs javascript components
$ bundle exec middleman server
== The Middleman is loading
== LiveReload is waiting for a browser to connect
== The Middleman is standing watch at http://0.0.0.0:4567
== Inspect your site configuration at http://0.0.0.0:4567/__middleman/
```

alternatively you can run:

```
$ rake server
```

A web-server will then be running and opoen the site on http://localhost:4567

## Building

Usually you don't need to kick off a build locally as we use [Travis CI](https://travis-ci.org/rossconf/rossconf.io) to do this for us and deploy the site. But sometimes things fail even though `middleman server` works fine, and you'll need to run a build. If you are unfamiliar with **middleman** here is the build command:

```
$ bundle exec middleman build # --verbose (optional)
```

This will (re)build the site into `./build` and stop in case it encounters an error.

## Data

All **content** should be kept in the `./data` directory and not in the templates themselves. There are still hardcoded parts which will be moved over time.

_**Note:** Blog is kept under `./source/blog`_

### content.yml

This holds side-wide generic information, currently meta-data.

### Events

Events are kept in separate YAML-files that follow the same structure and are named by city. (For the future we'll also introduce an extended filename schema).

#### event.yml

To add an event simply copy over `./examples/event.yml` into `./data/events/`.

Below are details on how to fill what.

##### General Information

```
city:              # In what city is the event?
header:            # The image path to the image that should be used as the header
header_front:      # The image path to what should be shown on the frontpage
tagline:           # (optional) Will be shown below the first headline
date_location:     # Nicely combine the date and location like: "September 26, 2015 @ Wooga"
date:              # Date of the event in the format of "DD-MM-YYYY"
description:       # A little intro text
sponsoring_email:  # Where can people interested in helping get in touch?
eventbrite_link:   # We used eventbrite for most events, you don't need to but here you can put the link to the tickets.

meta:              # HTML Metadata
  description:
  keywords:
    - ...

social:            # Social media accounts
  twitter:
  facebook:

location:          # Where is your event taking place
  map_link:        # Simply the Google Maps iframe URL
  address:         # The address in text.

coc:               # Where can people get in touch if they need help and/or feel the Code of Conduct is not respected?
```

##### Speakers

Speakers are added in an array with the following attributes: **name**, **image_url**, **twitter**, **github** and **bio**.

```
speakers:
  - name:
    image_url:
    twitter:
    github:
    bio:
  - ...
```

##### Projects

Projects are as well added as an array, with the attribute: **name**, **image_url** and **description**

```
projects:
  - name:
    image_url:
    description:
  - ...
```

##### Schedule

```
schedule:
  "00:00 - 00:00": ...
  "00:00 - 00:00": ...
```

##### Team

```
team:
  - name:
    image_url:
    twitter:
    github:
```

##### Sponsors

```
sponsors:
  - name:
    url:
    image:
```

##### Extras

```
extras:
  - ...
```

### Bugs

Please open an issue.

### Contributing

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Added some feature')
- Push to the branch (git push origin my-new-feature)
- Create new Pull Request

# Code of Conduct

This project adheres to the [Contributor Convenant Code of Conduct](https://github.com/rossconf/rossconf.io/blob/main/CODE_OF_CONDUCT.md). By participating, you are expected to honor this code. For the conferences we adhere to the [Berlin Code of Conduct](http://berlincodeofconduct.org/).
