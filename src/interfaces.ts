import { IncomingMessage } from 'http';

export type Syntax =
  | 'zig'
  | 'zephir'
  | 'zeek'
  | 'yaml'
  | 'yaml+jinja'
  | 'extempore'
  | 'xtend'
  | 'xslt'
  | 'xorg.conf'
  | 'xml+smarty'
  | 'xml+php'
  | 'xml'
  | 'xml+erb'
  | 'xml+django'
  | 'xquery'
  | 'x10'
  | 'whiley'
  | 'webidl'
  | 'wdiff'
  | 'vim'
  | 'vhdl'
  | 'verilog'
  | 'xml+velocity'
  | 'velocity'
  | 'html+velocity'
  | 'vb.net'
  | 'aspx-vb'
  | 'vala'
  | 'vgl'
  | 'vctreestatus'
  | 'vclsnippets'
  | 'vcl'
  | 'vbscript'
  | 'usd'
  | 'urbiscript'
  | 'unicon'
  | 'ucode'
  | 'typoscript'
  | 'typoscripthtmldata'
  | 'typoscriptcssdata'
  | 'ts'
  | 'twig'
  | 'html+twig'
  | 'turtle'
  | 'treetop'
  | 'tsql'
  | 'todotxt'
  | 'thrift'
  | 'text'
  | 'tex'
  | 'terraform'
  | 'terminfo'
  | 'termcap'
  | 'ttl'
  | 'tea'
  | 'tcshcon'
  | 'tcsh'
  | 'tcl'
  | 'tasm'
  | 'tads3'
  | 'toml'
  | 'tap'
  | 'systemverilog'
  | 'swig'
  | 'swift'
  | 'sc'
  | 'stata'
  | 'stan'
  | 'ssp'
  | 'squidconf'
  | 'sqlite3'
  | 'sql'
  | 'sparql'
  | 'sourceslist'
  | 'sp'
  | 'solidity'
  | 'snowball'
  | 'snobol'
  | 'smarty'
  | 'sgf'
  | 'smalltalk'
  | 'smali'
  | 'slurm'
  | 'slim'
  | 'slash'
  | 'silver'
  | 'sieve'
  | 'shen'
  | 'shexc'
  | 'scss'
  | 'scilab'
  | 'scheme'
  | 'scdoc'
  | 'scaml'
  | 'scala'
  | 'sass'
  | 'sarl'
  | 'sml'
  | 'splus'
  | 'sas'
  | 'rust'
  | 'rb'
  | 'rbcon'
  | 'rts'
  | 'rst'
  | 'rsl'
  | 'rql'
  | 'robotframework'
  | 'roboconf-instances'
  | 'roboconf-graph'
  | 'ride'
  | 'rhtml'
  | 'rexx'
  | 'resource'
  | 'registry'
  | 'redcode'
  | 'red'
  | 'rebol'
  | 'reason'
  | 'rd'
  | 'raw'
  | 'ragel-ruby'
  | 'ragel-objc'
  | 'ragel'
  | 'ragel-java'
  | 'ragel-em'
  | 'ragel-d'
  | 'ragel-cpp'
  | 'ragel-c'
  | 'racket'
  | 'spec'
  | 'rnc'
  | 'rconsole'
  | 'qml'
  | 'qvto'
  | 'qbasic'
  | 'pytb'
  | 'python'
  | 'pycon'
  | 'py2tb'
  | 'python2'
  | 'pypylog'
  | 'puppet'
  | 'pug'
  | 'protobuf'
  | 'properties'
  | 'prolog'
  | 'praat'
  | 'ps1con'
  | 'powershell'
  | 'pov'
  | 'postgresql'
  | 'psql'
  | 'postscript'
  | 'pony'
  | 'plpgsql'
  | 'pkgconfig'
  | 'pike'
  | 'pig'
  | 'php'
  | 'perl'
  | 'perl6'
  | 'peg'
  | 'pawn'
  | 'parasail'
  | 'pan'
  | 'pacmanconf'
  | 'openedge'
  | 'opa'
  | 'ooc'
  | 'odin'
  | 'octave'
  | 'ocaml'
  | 'objective-j'
  | 'objective-c++'
  | 'objective-c'
  | 'objdump'
  | 'numpy'
  | 'nusmv'
  | 'notmuch'
  | 'nixos'
  | 'nit'
  | 'nim'
  | 'nginx'
  | 'newspeak'
  | 'newlisp'
  | 'nesc'
  | 'nemerle'
  | 'objdump-nasm'
  | 'nasm'
  | 'nsis'
  | 'ncl'
  | 'xml+myghty'
  | 'myghty'
  | 'js+myghty'
  | 'html+myghty'
  | 'css+myghty'
  | 'mysql'
  | 'mxml'
  | 'mupad'
  | 'mscgen'
  | 'mql'
  | 'xul+mozpreproc'
  | 'mozpercentpreproc'
  | 'javascript+mozpreproc'
  | 'mozhashpreproc'
  | 'css+mozpreproc'
  | 'mosel'
  | 'moon'
  | 'monte'
  | 'monkey'
  | 'trac-wiki'
  | 'modula2'
  | 'modelica'
  | 'ms'
  | 'minid'
  | 'matlabsession'
  | 'matlab'
  | 'mathematica'
  | 'mason'
  | 'mask'
  | 'md'
  | 'maql'
  | 'xml+mako'
  | 'mako'
  | 'js+mako'
  | 'html+mako'
  | 'css+mako'
  | 'make'
  | 'doscon'
  | 'moocode'
  | 'mime'
  | 'lua'
  | 'logtalk'
  | 'logos'
  | 'llvm-mir'
  | 'llvm-mir-body'
  | 'llvm'
  | 'live-script'
  | 'lidr'
  | 'lhs'
  | 'lcry'
  | 'lagda'
  | 'liquid'
  | 'limbo'
  | 'lighty'
  | 'less'
  | 'lean'
  | 'xml+lasso'
  | 'lasso'
  | 'js+lasso'
  | 'html+lasso'
  | 'css+lasso'
  | 'lsl'
  | 'kotlin'
  | 'koka'
  | 'kmsg'
  | 'kconfig'
  | 'kal'
  | 'juttle'
  | 'julia'
  | 'jlcon'
  | 'jsp'
  | 'json'
  | 'jsonld'
  | 'json-object'
  | 'jsgf'
  | 'jcl'
  | 'js+smarty'
  | 'js+php'
  | 'js'
  | 'js+genshitext'
  | 'js+erb'
  | 'js+django'
  | 'java'
  | 'jasmin'
  | 'jags'
  | 'j'
  | 'isabelle'
  | 'irc'
  | 'ioke'
  | 'io'
  | 'ini'
  | 'inform7'
  | 'i6t'
  | 'inform6'
  | 'igor'
  | 'idris'
  | 'icon'
  | 'idl'
  | 'hybris'
  | 'hylang'
  | 'haxeml'
  | 'http'
  | 'html+smarty'
  | 'html+php'
  | 'html'
  | 'html+genshi'
  | 'html+django'
  | 'hspec'
  | 'hsail'
  | 'hexdump'
  | 'hx'
  | 'haskell'
  | 'handlebars'
  | 'html+handlebars'
  | 'haml'
  | 'hlsl'
  | 'groovy'
  | 'groff'
  | 'gst'
  | 'gosu'
  | 'gooddata-cl'
  | 'golo'
  | 'go'
  | 'gnuplot'
  | 'cucumber'
  | 'pot'
  | 'genshitext'
  | 'genshi'
  | 'gas'
  | 'glsl'
  | 'gap'
  | 'freefem'
  | 'foxpro'
  | 'fortran'
  | 'fortranfixed'
  | 'forth'
  | 'floscript'
  | 'flatline'
  | 'fish'
  | 'fennel'
  | 'felix'
  | 'fan'
  | 'fancy'
  | 'factor'
  | 'fsharp'
  | 'ezhil'
  | 'xml+evoque'
  | 'evoque'
  | 'html+evoque'
  | 'erl'
  | 'erlang'
  | 'erb'
  | 'email'
  | 'emacs'
  | 'elm'
  | 'elixir'
  | 'iex'
  | 'eiffel'
  | 'ebnf'
  | 'easytrieve'
  | 'earl-grey'
  | 'ec'
  | 'ecl'
  | 'dylan-lid'
  | 'dylan'
  | 'dylan-console'
  | 'duel'
  | 'dtd'
  | 'docker'
  | 'django'
  | 'diff'
  | 'dg'
  | 'delphi'
  | 'control'
  | 'dasm16'
  | 'dart'
  | 'dpatch'
  | 'd-objdump'
  | 'd'
  | 'cython'
  | 'cypher'
  | 'cuda'
  | 'css+smarty'
  | 'css+php'
  | 'css'
  | 'css+genshitext'
  | 'css+erb'
  | 'css+django'
  | 'csound-score'
  | 'csound'
  | 'csound-document'
  | 'cr'
  | 'cryptol'
  | 'croc'
  | 'crmsh'
  | 'cpp-objdump'
  | 'cpp'
  | 'coq'
  | 'componentpascal'
  | 'common-lisp'
  | 'cfs'
  | 'cfm'
  | 'cfc'
  | 'coffee-script'
  | 'cobol'
  | 'cobolfree'
  | 'clojurescript'
  | 'clojure'
  | 'clean'
  | 'clay'
  | 'cirru'
  | 'xml+cheetah'
  | 'cheetah'
  | 'js+cheetah'
  | 'html+cheetah'
  | 'charmci'
  | 'chapel'
  | 'chai'
  | 'cfengine3'
  | 'ceylon'
  | 'cbmbas'
  | 'capnp'
  | 'capdl'
  | 'cadl'
  | 'ca65'
  | 'csharp'
  | 'aspx-cs'
  | 'cpsa'
  | 'c-objdump'
  | 'cmake'
  | 'c'
  | 'camkes'
  | 'bugs'
  | 'brainfuck'
  | 'boogie'
  | 'boo'
  | 'boa'
  | 'bnf'
  | 'blitzmax'
  | 'blitzbasic'
  | 'bib'
  | 'befunge'
  | 'bat'
  | 'console'
  | 'bash'
  | 'basemake'
  | 'bst'
  | 'bc'
  | 'bbcode'
  | 'bbcbasic'
  | 'awk'
  | 'ahk'
  | 'autoit'
  | 'augeas'
  | 'asy'
  | 'aspectj'
  | 'arduino'
  | 'applescript'
  | 'apacheconf'
  | 'antlr-ruby'
  | 'antlr-python'
  | 'antlr-perl'
  | 'antlr-objc'
  | 'antlr'
  | 'antlr-java'
  | 'antlr-cpp'
  | 'antlr-csharp'
  | 'antlr-as'
  | 'ng2'
  | 'html+ng2'
  | 'ampl'
  | 'at'
  | 'alloy'
  | 'aheui'
  | 'agda'
  | 'adl'
  | 'ada'
  | 'as'
  | 'as3'
  | 'abnf'
  | 'apl'
  | 'abap';

export type ExpiryDays =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 99
  | 100
  | 101
  | 102
  | 103
  | 104
  | 105
  | 106
  | 107
  | 108
  | 109
  | 110
  | 111
  | 112
  | 113
  | 114
  | 115
  | 116
  | 117
  | 118
  | 119
  | 120
  | 121
  | 122
  | 123
  | 124
  | 125
  | 126
  | 127
  | 128
  | 129
  | 130
  | 131
  | 132
  | 133
  | 134
  | 135
  | 136
  | 137
  | 138
  | 139
  | 140
  | 141
  | 142
  | 143
  | 144
  | 145
  | 146
  | 147
  | 148
  | 149
  | 150
  | 151
  | 152
  | 153
  | 154
  | 155
  | 156
  | 157
  | 158
  | 159
  | 160
  | 161
  | 162
  | 163
  | 164
  | 165
  | 166
  | 167
  | 168
  | 169
  | 170
  | 171
  | 172
  | 173
  | 174
  | 175
  | 176
  | 177
  | 178
  | 179
  | 180
  | 181
  | 182
  | 183
  | 184
  | 185
  | 186
  | 187
  | 188
  | 189
  | 190
  | 191
  | 192
  | 193
  | 194
  | 195
  | 196
  | 197
  | 198
  | 199
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 209
  | 210
  | 211
  | 212
  | 213
  | 214
  | 215
  | 216
  | 217
  | 218
  | 219
  | 220
  | 221
  | 222
  | 223
  | 224
  | 225
  | 226
  | 227
  | 228
  | 229
  | 230
  | 231
  | 232
  | 233
  | 234
  | 235
  | 236
  | 237
  | 238
  | 239
  | 240
  | 241
  | 242
  | 243
  | 244
  | 245
  | 246
  | 247
  | 248
  | 249
  | 250
  | 251
  | 252
  | 253
  | 254
  | 255
  | 256
  | 257
  | 258
  | 259
  | 260
  | 261
  | 262
  | 263
  | 264
  | 265
  | 266
  | 267
  | 268
  | 269
  | 270
  | 271
  | 272
  | 273
  | 274
  | 275
  | 276
  | 277
  | 278
  | 279
  | 280
  | 281
  | 282
  | 283
  | 284
  | 285
  | 286
  | 287
  | 288
  | 289
  | 290
  | 291
  | 292
  | 293
  | 294
  | 295
  | 296
  | 297
  | 298
  | 299
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 309
  | 310
  | 311
  | 312
  | 313
  | 314
  | 315
  | 316
  | 317
  | 318
  | 319
  | 320
  | 321
  | 322
  | 323
  | 324
  | 325
  | 326
  | 327
  | 328
  | 329
  | 330
  | 331
  | 332
  | 333
  | 334
  | 335
  | 336
  | 337
  | 338
  | 339
  | 340
  | 341
  | 342
  | 343
  | 344
  | 345
  | 346
  | 347
  | 348
  | 349
  | 350
  | 351
  | 352
  | 353
  | 354
  | 355
  | 356
  | 357
  | 358
  | 359
  | 360
  | 361
  | 362
  | 363
  | 364
  | 365;

export type ResponseObject = {
  response: IncomingMessage;
  body: string;
};

export type APIOptions = {
  /**
   * The paste data to be set.
   *
   * Required parameter
   */
  content: string;
  /**
   * Title of the paste.
   *
   * Title can be of max 100 characters. Will be truncated to first 100 characters
   *
   * Default: `new Date().toUTCString()`
   */
  title?: string;
  /**
   * Paste encoding or syntax of the paste.
   *
   * Check available choices [here](https://dpaste.com/api/v2/syntax-choices/)
   *
   * Default: `text`
   */
  syntax?: Syntax;
  /**
   * Number of days after which paste will expire.
   * Max is 365 days.
   *
   * Default: 7 days
   */
  expiry_days?: ExpiryDays;
};

export interface CreatePasteOptions extends APIOptions {
  /**
   * Dpaste API token.
   * Can be left empty to create Anonymous pastes.
   *
   * Check Authentication in https://dpaste.com/api/v2/
   *
   * Default: `process.env.DPASTE_API_TOKEN`
   */
  APIToken?: string;
}
