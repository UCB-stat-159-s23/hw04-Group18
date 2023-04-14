Search.setIndex({"docnames": ["LOSC_Event_tutorial", "LOSC_Event_tutorial.ipynb", "README", "contribution_statement", "hw04_description"], "filenames": ["LOSC_Event_tutorial.ipynb", "LOSC_Event_tutorial.ipynb.rst", "README.md", "contribution_statement.md", "hw04_description.md"], "titles": ["BINARY BLACK HOLE SIGNALS IN LIGO OPEN DATA", "Heading: LOSC_Event_tutorial.ipynb.rst", "&lt;no title&gt;", "&lt;no title&gt;", "Homework No 4 - <em>From Notebooks to Research Packages, Part II</em>"], "terms": {"repositori": [0, 3], "public": [0, 4], "so": [0, 4], "binder": [0, 4], "can": [0, 4], "all": [0, 4], "base": 0, "origin": 0, "center": 0, "scienc": 0, "class": [0, 4], "exercis": 0, "restructur": 0, "improv": [0, 4], "reproduc": [0, 4], "homework": 0, "assign": [0, 4], "spring": [0, 4], "2023": [0, 4], "uc": [0, 4], "berkelei": [0, 4], "s": 0, "stat": [0, 2], "159": [0, 2, 4], "259": [0, 4], "cours": 0, "authorship": [0, 4], "rest": 0, "version": 0, "1": 0, "64": 0, "2022": [0, 4], "juli": 0, "05": 0, "welcom": 0, "ipython": 0, "notebook": 0, "associ": 0, "script": 0, "losc_event_tutori": [0, 2], "py": [0, 3], "go": [0, 4], "through": 0, "some": 0, "typic": 0, "task": 0, "strain": 0, "time": 0, "seri": 0, "releas": 0, "losc": 0, "eventapi": 0, "run": [0, 4], "link": [0, 4], "page": 0, "If": 0, "you": [0, 4], "your": [0, 4], "own": 0, "section": 0, "below": 0, "after": 0, "desir": 0, "eventnam": 0, "just": 0, "full": 0, "question": 0, "suggest": 0, "correct": 0, "etc": [0, 4], "ask": 0, "igwn": 0, "assum": 0, "comfort": 0, "also": 0, "know": 0, "bit": [0, 4], "about": [0, 4], "digit": 0, "want": [0, 4], "learn": 0, "includ": [0, 4], "power": 0, "manipul": 0, "vast": 0, "complex": 0, "topic": 0, "we": [0, 4], "cover": 0, "mani": 0, "basic": [0, 4], "beginn": 0, "resourc": 0, "web": 0, "101scienc": 0, "com": 0, "dsp": 0, "htm": 0, "coursera": 0, "georgemdalla": 0, "wordpress": 0, "2014": 0, "14": [0, 4], "wavelet": 0, "4": 0, "dummi": 0, "fourier": 0, "transform": 0, "heisenberg": 0, "en": [0, 4], "wikipedia": [0, 4], "wiki": [0, 4], "signal_process": 0, "spectral_dens": 0, "greenteapress": 0, "thinkdsp": 0, "digital_filt": 0, "And": 0, "well": 0, "lot": 0, "more": [0, 4], "pre": 0, "configur": [0, 4], "setup": [0, 4], "eg": 0, "great": 0, "don": 0, "t": 0, "have": [0, 4], "up": [0, 4], "anyth": 0, "otherwis": 0, "begin": [0, 4], "get": [0, 4], "necessari": 0, "zip": 0, "unpack": 0, "singl": 0, "directori": [0, 4], "ipynb": 0, "readligo": [0, 3], "32": 0, "4096": 0, "hz": 0, "hdf5": 0, "format": 0, "both": 0, "detector": [0, 4], "plu": 0, "cross": 0, "polar": 0, "paramet": 0, "need": [0, 4], "few": 0, "numpi": 0, "matplotlib": 0, "scipi": 0, "h5py": 0, "hint": 0, "tutorial00": 0, "should": [0, 4], "work": [0, 4], "2": 0, "6": 0, "abov": [0, 4], "3": 0, "recent": 0, "might": 0, "warn": 0, "futurewarn": 0, "messag": [0, 4], "tend": 0, "differ": 0, "hopefulli": 0, "thei": 0, "ignor": [0, 4], "filetyp": 0, "mean": 0, "hdfgroup": 0, "gp": 0, "number": [0, 4], "second": 0, "sinc": [0, 4], "jan": 0, "1980": 0, "gmt": 0, "oc": 0, "np": 0, "edu": 0, "oc2902w": 0, "timsi": 0, "html": [0, 2, 4], "me": 0, "most": 0, "default": 0, "select": 0, "must": 0, "one": [0, 4], "proce": 0, "gw150914": 0, "gw151226": 0, "lvt151012": 0, "gw170104": 0, "make_plot": 0, "plottyp": 0, "png": 0, "pdf": 0, "standard": 0, "numer": 0, "import": [0, 4], "interpol": 0, "interp1d": 0, "butter": 0, "filtfilt": 0, "iirdesign": 0, "zpk2tf": 0, "freqz": 0, "magic": 0, "out": 0, "doesn": 0, "inlin": 0, "config": 0, "inlinebackend": 0, "figure_format": 0, "retina": 0, "pyplot": 0, "plt": 0, "mlab": 0, "specif": 0, "ligotool": [0, 3, 4], "rl": 0, "function": [0, 4], "util": 0, "fnjson": 0, "bbh_events_v3": 0, "try": 0, "load": 0, "r": 0, "except": 0, "ioerror": 0, "print": 0, "cannot": 0, "quit": 0, "did": 0, "user": 0, "an": [0, 4], "extract": 0, "fn_h1": 0, "fn_l1": 0, "fn_templat": 0, "fs": 0, "tevent": 0, "approxim": 0, "fband": 0, "band": 0, "bandpass": 0, "h": 0, "h1_losc_4_v2": 0, "1126259446": 0, "l": 0, "l1_losc_4_v2": 0, "gw150914_4_templat": 0, "1126259462": 0, "44": 0, "utcev": 0, "2015": 0, "09": 0, "14t09": 0, "50": [0, 4], "45": 0, "m1": 0, "41": 0, "743": 0, "m2": 0, "29": 0, "237": 0, "a1": 0, "0": 0, "355": 0, "a2": 0, "769": 0, "approx": 0, "lalsim": 0, "seobnrv2": 0, "43": 0, "300": 0, "f_min": 0, "10": 0, "defin": 0, "filenam": 0, "strain_h1": 0, "time_h1": 0, "chan_dict_h1": 0, "loaddata": 0, "strain_l1": 0, "time_l1": 0, "chan_dict_l1": 0, "them": 0, "gener": [0, 4], "ha": [0, 4], "fill": 0, "nan": 0, "when": 0, "take": 0, "valid": 0, "qualiti": 0, "analyz": 0, "requir": 0, "loop": 0, "over": 0, "stretch": 0, "In": [0, 4], "simplic": 0, "detail": 0, "same": [0, 4], "vector": 0, "interv": 0, "uniformli": 0, "dt": 0, "let": [0, 4], "stuff": 0, "len": 0, "min": 0, "max": 0, "what": 0, "chan_dict": 0, "usabl": [0, 4], "sum": 0, "131072": 0, "1126259461": 0, "999878": 0, "1126259477": 0, "9997559": 0, "7": 0, "044665943156067e": 0, "19": 0, "5": 0, "895522509246437e": 0, "23": 0, "706262192397465e": 0, "8697138664279764e": 0, "18": 0, "0522332249909908e": 0, "60035111311666e": 0, "20": 0, "deltat": 0, "around": 0, "index": 0, "indxt": 0, "where": 0, "figur": [0, 4], "label": 0, "g": 0, "xlabel": 0, "str": 0, "ylabel": 0, "legend": 0, "loc": 0, "lower": 0, "right": 0, "titl": 0, "savefig": 0, "_strain": 0, "domin": 0, "low": 0, "nois": 0, "wai": 0, "without": [0, 4], "domain": 0, "give": [0, 4], "idea": 0, "A": 0, "visual": 0, "squar": 0, "root": 0, "psd": [0, 4], "averag": 0, "fast": 0, "fft": 0, "estim": 0, "equival": 0, "versu": 0, "limit": 0, "abil": 0, "identifi": 0, "gw": 0, "unit": 0, "rt": 0, "rm": 0, "integr": [0, 4], "There": [0, 4], "moment": 0, "make_psd": 0, "nfft": 0, "pxx_h1": 0, "freq": 0, "pxx_l1": 0, "psd_h1": 0, "psd_l1": 0, "smooth": 0, "dure": 0, "o1": 0, "line": 0, "ll": 0, "later": 0, "pxx": 0, "e": 0, "22": 0, "7e": 0, "2000": 0, "psd_smooth": 0, "overlaid": 0, "f_max": 0, "figsiz": 0, "8": 0, "loglog": 0, "sqrt": 0, "k": 0, "model": 0, "axi": 0, "1e": 0, "24": 0, "grid": 0, "rthz": 0, "upper": 0, "_asd": 0, "onli": [0, 4], "between": 0, "properli": 0, "calibr": 0, "That": 0, "ok": 0, "becaus": 0, "high": 0, "sens": 0, "astrophys": 0, "sourc": 0, "12": 0, "captur": 0, "nyquist": 0, "2048": 0, "our": 0, "given": 0, "end": [0, 4], "almost": 0, "alwai": 0, "strong": 0, "instrument": 0, "engin": 0, "mirror": 0, "suspens": 0, "reson": 0, "500": 0, "harmon": 0, "control": 0, "dither": 0, "60": 0, "unwant": 0, "return": 0, "rel": 0, "weak": 0, "less": 0, "than": 0, "long": 0, "while": [0, 4], "entir": 0, "hard": 0, "tune": 0, "ey": 0, "won": 0, "arbitrari": 0, "thing": 0, "much": 0, "accuraci": 0, "metric": 0, "evalu": [0, 4], "sensit": 0, "distanc": 0, "regist": 0, "ratio": 0, "snr": 0, "direct": 0, "orient": 0, "nomin": 0, "threshold": 0, "similar": 0, "cbc": 0, "each": 0, "system": 0, "mass": 0, "sun": 0, "neglig": 0, "spin": 0, "merger": 0, "like": [0, 4], "siren": 0, "theoret": 0, "calcul": [0, 4], "fall": 0, "off": 0, "earth": 0, "tell": 0, "how": [0, 4], "far": 0, "awai": 0, "astronom": 0, "post": 0, "newtonian": 0, "quadrupol": 0, "inspir": 0, "phase": 0, "best": 0, "simpl": 0, "express": 0, "ringdown": 0, "strength": 0, "But": 0, "order": [0, 4], "its": [0, 4], "antenna": 0, "pattern": 0, "respons": 0, "It": 0, "non": 0, "trivial": 0, "2648": 0, "maximum": [0, 4], "valu": 0, "describ": [0, 4], "appendix": 0, "d": 0, "findchirp": 0, "algorithm": 0, "compact": 0, "b": 0, "allen": 0, "et": 0, "al": 0, "physic": 0, "review": 0, "85": 0, "122006": 0, "2012": 0, "arxiv": 0, "ab": 0, "gr": 0, "qc": 0, "0509116": 0, "bns_rang": 0, "spectrum": 0, "f": [0, 4], "copi": 0, "step": 0, "size": 0, "df": 0, "constant": 0, "speed": 0, "light": 0, "clight": 0, "99792458e8": 0, "m": 0, "newton": 0, "67259e": 0, "11": [0, 4], "kg": 0, "parsec": 0, "popular": 0, "26": 0, "year": 0, "08568025e16": 0, "solar": 0, "msol": 0, "989e30": 0, "isn": 0, "fun": 0, "tsol": 0, "background": 0, "snrdet": 0, "convers": 0, "horizon": 0, "favg": 0, "mn": 0, "mtot": 0, "total": 0, "eta": 0, "symmetr": 0, "mchirp": 0, "chirp": 0, "follow": [0, 4], "eqn": 0, "1b": 0, "fiduci": 0, "dist": 0, "mpc": 0, "0e6": 0, "innermost": 0, "stabl": 0, "circular": 0, "orbit": 0, "isco": 0, "r_isco": 0, "separ": [0, 4], "geometr": 0, "6m": 0, "pn": 0, "8m": 0, "eob": 0, "f_isco": 0, "pi": 0, "minimum": 0, "too": 0, "ani": [0, 4], "fisco": 0, "fr": 0, "nonzero": 0, "logical_and": 0, "ffr": 0, "stationari": 0, "htild": 0, "96": 0, "htilda2": 0, "det": 0, "sspec": 0, "els": 0, "sspecfr": 0, "optim": 0, "d2": 0, "d_bn": 0, "r_bn": 0, "1f": 0, "169": 0, "74": 0, "147": 0, "9": 0, "graviti": 0, "thu": 0, "higher": 0, "louder": 0, "veri": 0, "strongli": 0, "color": 0, "fluctuat": 0, "larger": 0, "reach": 0, "roughli": 0, "flat": 0, "white": 0, "80": 0, "divid": 0, "suppress": 0, "extra": 0, "better": 0, "search": 0, "prior": 0, "knowledg": 0, "To": [0, 4], "rid": 0, "remain": 0, "longer": 0, "now": [0, 4], "sigma": 0, "along": 0, "def": 0, "interp_psd": 0, "nt": 0, "rfftfreq": 0, "freqs1": 0, "linspac": 0, "back": 0, "care": 0, "normal": [0, 4], "hf": 0, "rfft": 0, "norm": 0, "white_hf": 0, "white_ht": 0, "irfft": 0, "n": 0, "whiten_data": 0, "strain_h1_whiten": 0, "strain_l1_whiten": 0, "bb": 0, "btype": 0, "strain_h1_whitenbp": 0, "strain_l1_whitenbp": 0, "short": 0, "pick": 0, "shorter": 0, "ftt": 0, "int": 0, "overlap": [0, 4], "resolv": 0, "featur": 0, "novl": 0, "15": 0, "16": 0, "window": [0, 4], "minim": [0, 4], "leakag": [0, 4], "spectral_leakag": [0, 4], "blackman": 0, "colormap": 0, "exampl": [0, 4], "colormaps_refer": 0, "viridi": 0, "seem": 0, "new": 0, "settl": 0, "ocean": 0, "spec_cmap": 0, "spec_h1": 0, "bin": 0, "im": 0, "specgram": 0, "noverlap": 0, "cmap": 0, "xextent": 0, "colorbar": 0, "aligo": 0, "_h1_spectrogram": 0, "_l1_spectrogram": 0, "mai": 0, "excess": 0, "1000": 0, "1500": 0, "evid": 0, "multipl": 0, "violin": 0, "mode": 0, "fiber": 0, "hold": 0, "interferomet": 0, "zoom": 0, "think": 0, "hope": 0, "region": 0, "_h1_spectrogram_whiten": 0, "_l1_spectrogram_whiten": 0, "loud": 0, "visibl": [0, 4], "object": 0, "show": 0, "characterist": 0, "rise": 0, "chang": 0, "variabl": 0, "cell": [0, 4], "consist": 0, "parameter": 0, "As": 0, "ident": 0, "re": 0, "skip": 0, "subtleti": 0, "combin": 0, "f_templat": 0, "metadata": 0, "template_p": 0, "template_c": 0, "t_m1": 0, "meta": 0, "attr": 0, "t_m2": 0, "t_a1": 0, "t_a2": 0, "t_approx": 0, "close": 0, "extend": 0, "zero": 0, "pad": 0, "length": 0, "template_offset": 0, "template_p_whiten": 0, "template_c_whiten": 0, "template_p_whitenbp": 0, "template_c_whitenbp": 0, "t_mtot": 0, "final": 0, "bh": 0, "95": 0, "initi": 0, "t_mfin": 0, "radiu": 0, "km": 0, "r_fin": 0, "j": 0, "ttime": 0, "instantan": 0, "tphase": 0, "unwrap": 0, "angl": 0, "fgw": 0, "gradient": 0, "fix": 0, "discontinu": 0, "iffix": 0, "100": 0, "001": 0, "v": 0, "c": 0, "voverc": 0, "f_gw": 0, "f_inband": 0, "iband": 0, "peak": 0, "ipeak": 0, "argmax": 0, "cycl": 0, "inband": 0, "ncycl": 0, "famili": 0, "2f": 0, "msun": 0, "mfinal": 0, "durat": 0, "n_cycl": 0, "0f": 0, "subplot": 0, "xlim": 0, "d_eff": 0, "_templat": 0, "70": 0, "98": 0, "67": 0, "35": 0, "77": 0, "84": 0, "08": 0, "02": 0, "06": 0, "57": 0, "199": 0, "known": 0, "buri": 0, "gaussian": 0, "techniqu": 0, "commun": 0, "noisi": 0, "possibl": 0, "On": 0, "other": [0, 4], "hand": 0, "even": [0, 4], "scientist": 0, "hidden": 0, "compress": 0, "convent": 0, "rather": 0, "elabor": 0, "suit": 0, "against": 0, "procedur": 0, "help": 0, "infer": 0, "sky": 0, "locat": 0, "blind": 0, "250": 0, "000": 0, "trigger": 0, "coincid": 0, "extrem": 0, "computation": 0, "intens": 0, "pipelin": 0, "simplifi": 0, "being": 0, "good": 0, "fairli": 0, "method": 0, "vs": 0, "iv": 0, "coalesc": 0, "1602": 0, "03839": 0, "common": [0, 4], "psd_window": 0, "record": 0, "etim": 0, "datafreq": 0, "fftfreq": 0, "remov": 0, "effect": [0, 4], "window_funct": 0, "tukey_window": 0, "dwindow": 0, "tukei": 0, "alpha": 0, "prefer": 0, "prepar": 0, "template_fft": 0, "data_psd": 0, "data_fft": 0, "power_vec": 0, "interp": 0, "output": 0, "multipli": 0, "space": 0, "invers": 0, "ifft": 0, "put": [0, 4], "conjug": 0, "optimal_tim": 0, "expect": 0, "Then": 0, "sigmasq": 0, "snr_complex": 0, "peaksampl": 0, "roll": 0, "indmax": 0, "timemax": 0, "snrmax": 0, "definit": 0, "d_thresh": 0, "distnac": 0, "offset": 0, "appli": 0, "template_phaseshift": 0, "real": 0, "exp": 0, "1j": 0, "template_rol": 0, "scale": 0, "pass": 0, "template_whiten": 0, "template_match": 0, "4f": 0, "pcolor": 0, "strain_whitenbp": 0, "template_l1": 0, "template_h1": 0, "plot_result": 0, "ylim": 0, "25": [0, 3], "left": 0, "_": 0, "_snr": 0, "stdev": 0, "resid": 0, "residu": 0, "subtract": 0, "_matchtim": 0, "displai": 0, "top": 0, "template_f": 0, "absolut": 0, "_matchfreq": 0, "4395": 0, "814": 0, "1889": 0, "nameerror": 0, "traceback": 0, "call": [0, 4], "last": 0, "input": 0, "97": 0, "101": 0, "102": 0, "157": 0, "158": 0, "bayesian": 0, "posterior": 0, "nearbi": 0, "doe": 0, "job": 0, "uncertain": 0, "somewhat": 0, "Is": 0, "NOT": 0, "actual": [0, 4], "luminos": 0, "depend": 0, "These": [0, 4], "redshift": 0, "cosmolog": 0, "taken": 0, "account": 0, "neglect": 0, "evolut": 0, "been": 0, "themselv": 0, "true": 0, "smaller": 0, "factor": 0, "z": 0, "wav": 0, "downsampl": 0, "2s": 0, "io": [0, 2], "wavfil": 0, "keep": 0, "within": 0, "integ": 0, "write": 0, "write_wavfil": [0, 4], "int16": 0, "32767": 0, "deltat_sound": 0, "indxd": 0, "_h1_whitenbp": 0, "_l1_whitenbp": 0, "template_p_smooth": 0, "soom": 0, "_template_whiten": 0, "With": 0, "headphon": 0, "abl": [0, 4], "hear": 0, "faint": 0, "thump": 0, "middl": 0, "fna": 0, "enhanc": 0, "increas": 0, "nasa": 0, "emploi": 0, "telescop": 0, "imag": 0, "fals": 0, "400": 0, "ing": 0, "notic": 0, "pitch": 0, "easier": 0, "reqshift": [0, 4], "fshift": 0, "sample_r": 0, "x": 0, "float": 0, "nbin": 0, "shape": 0, "y": 0, "speedup": 0, "fss": 0, "strain_h1_shift": 0, "strain_l1_shift": 0, "_h1_shift": 0, "_l1_shift": 0, "template_p_shift": 0, "_template_shift": 0, "mention": 0, "introduct": 0, "check": [0, 4], "repeat": 0, "16384": 0, "relev": 0, "dq": 0, "hw": 0, "inject": 0, "data_seg": 0, "fn": 0, "l1_losc_4_v1": 0, "kei": 0, "pair": 0, "item": [0, 4], "isnan": 0, "start": [0, 4], "stop": 0, "level": 0, "cbc_cat3": 0, "conserv": 0, "choic": 0, "dqflag": 0, "continu": [0, 4], "segment_list": 0, "dq_channel_to_seglist": 0, "iseg": 0, "time_seg": 0, "seg_strain": 0, "would": 0, "insert": 0, "hardwar": 0, "no_cbc_hw_inj": 0, "acquir": 0, "save": [0, 4], "disk": 0, "memori": 0, "suffici": 0, "f_nyquist": 0, "equal": 0, "spinless": 0, "1557": 0, "m_tot": 0, "canon": 0, "howev": 0, "interest": 0, "irang": 0, "structur": [0, 3], "dat": 0, "datcsv": 0, "arrai": 0, "transpos": 0, "header": 0, "fncsv": 0, "_data": 0, "headcsv": 0, "h1_data_whiten": 0, "l1_data_whiten": 0, "h1_template_whiten": 0, "l1_template_whiten": 0, "fmtcsv": 0, "join": 0, "6f": 0, "savetxt": 0, "fmt": 0, "wrote": 0, "click": 0, "jupyt": 0, "corner": 0, "menu": 0, "azur": 0, "http": [2, 4], "ucb": 2, "s23": 2, "github": 2, "hw04": [2, 4], "group18": 2, "peii": 3, "guan": 3, "construct": 3, "made": [3, 4], "instal": 3, "packag": 3, "ad": 3, "test": 3, "statist": 4, "due": 4, "fridai": 4, "04": 4, "59pm": 4, "pt": 4, "prof": 4, "p\u00e9rez": 4, "gsi": 4, "sapienza": 4, "depart": 4, "thi": 4, "worth": 4, "type": 4, "group": 4, "For": 4, "conclus": 4, "hw02": 4, "us": 4, "again": 4, "code": 4, "ligo": 4, "gravit": 4, "wave": 4, "detect": 4, "tutori": 4, "ar": 4, "solut": 4, "document": 4, "complet": 4, "pictur": 4, "The": 4, "data": 4, "layout": 4, "reorgan": 4, "still": 4, "file": 4, "live": 4, "audio": 4, "goe": 4, "present": 4, "befor": 4, "git": 4, "empti": 4, "littl": 4, "hack": 4, "gitkeep": 4, "those": 4, "explain": 4, "here": 4, "hw05": 4, "local": 4, "could": 4, "current": 4, "discuss": 4, "appropri": 4, "pyproj": 4, "toml": 4, "cfg": 4, "mytoi": 4, "guid": 4, "next": 4, "note": 4, "list": 4, "author": 4, "scientif": 4, "collabor": 4, "lsc": 4, "name": 4, "four": 4, "small": 4, "subfold": 4, "tests_readligo": 4, "command": 4, "pytest": 4, "modul": 4, "move": 4, "whiten": 4, "updat": 4, "instead": 4, "find": 4, "choos": 4, "spectral": 4, "org": 4, "three": 4, "set": 4, "proper": 4, "build": 4, "main": 4, "rememb": 4, "hub": 4, "view": 4, "book": 4, "vnc": 4, "desktop": 4, "sphinx": 4, "manual": 4, "instruct": 4, "do": 4, "lectur": 4, "url": 4, "push": 4, "branch": 4, "repo": 4, "talk": 4, "respect": 4, "lab": 4, "session": 4, "target": 4, "env": 4, "environ": 4, "clone": 4, "clean": 4, "_build": 4, "folder": 4, "overal": 4, "workflow": 4, "Be": 4, "sure": 4, "groupxx": 4, "xx": 4, "clear": 4, "commit": 4, "progress": 4, "tag": 4, "previou": 4, "readm": 4, "md": 4, "descript": 4, "project": 4, "badg": 4, "directli": 4, "launch": 4, "Not": 4, "archiv": 4, "gitignor": 4, "contribut": 4, "statement": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"binari": 0, "black": 0, "hole": 0, "signal": 0, "IN": 0, "ligo": 0, "open": 0, "data": 0, "thi": 0, "tutori": 0, "intend": 0, "educ": 0, "purpos": 0, "The": 0, "code": 0, "shown": 0, "here": 0, "us": 0, "produc": 0, "result": 0, "paper": 0, "publish": 0, "scientif": 0, "collabor": 0, "which": 0, "instead": 0, "reli": 0, "special": 0, "analysi": 0, "softwar": 0, "packag": [0, 4], "For": 0, "publicli": 0, "avail": 0, "gravit": 0, "wave": 0, "ar": 0, "lsc": 0, "virgo": 0, "see": 0, "http": 0, "www": 0, "gwosc": 0, "org": 0, "technic": 0, "note": 0, "bbh_tutorial_not": 0, "tabl": 0, "content": 0, "intro": 0, "process": 0, "download": 0, "comput": 0, "python": 0, "instal": [0, 4], "set": 0, "event": 0, "name": 0, "choos": 0, "plot": [0, 4], "type": 0, "read": 0, "properti": 0, "from": [0, 4], "local": 0, "json": 0, "file": 0, "advanc": 0, "gap": 0, "first": 0, "look": 0, "h1": 0, "l1": 0, "amplitud": 0, "spectral": 0, "densiti": 0, "asd": 0, "neutron": 0, "star": 0, "bn": 0, "detect": 0, "rang": 0, "bbh": 0, "whiten": 0, "spectrogram": 0, "waveform": 0, "templat": 0, "match": 0, "filter": 0, "find": 0, "make": [0, 4], "sound": 0, "listen": 0, "frequenc": 0, "shift": 0, "audio": 0, "segment": 0, "comment": 0, "sampl": 0, "rate": 0, "construct": 0, "csv": 0, "contain": 0, "head": 1, "losc_event_tutori": 1, "ipynb": 1, "rst": 1, "homework": 4, "No": 4, "4": 4, "notebook": 4, "research": 4, "part": 4, "ii": 4, "deliver": 4, "5": 4, "point": 4, "repositori": 4, "structur": 4, "add": 4, "test": 4, "readligo": 4, "py": 4, "creat": 4, "util": 4, "new": 4, "jupyterbook": 4, "github": 4, "page": 4, "action": 4, "makefil": 4}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})