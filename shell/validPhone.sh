grep '^\([0-9]\{3\}-\|([0-9]\{3\}) \)[0-9]\{3\}-[0-9]\{4\}$' file.txt

#^ symbol for must begin with, xxx- OR '(xxx) ' quoted for space.
#^\([0-9]\{3\}-\|([0-9]\{3\}) \)
#$ symbol for must end with xxx-xxxx

#[0-9]\{3\}-[0-9]\{4\}$
#where x's are digits