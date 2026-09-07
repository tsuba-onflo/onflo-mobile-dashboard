# Building the prototype into app/

Source: the `onflo/Mobile-App-Flutter` design repo, our working branch (see the commit message of the
last build for which one). Toolchain: Flutter 3.44.6 stable, the version the repo's CI pins.

    cd <checkout of the branch>
    flutter pub get
    flutter build web --release --base-href=/onflo-mobile-dashboard/app/
    rsync -a --delete --exclude BUILD.md build/web/ <this repo>/app/

Then commit `app/` with the source branch and commit SHA in the message. The design-system package is a
private git dependency; it fetches over SSH via the git URL rewrite already configured for onflo/.
