(function() {var implementors = {};
implementors["ink_env"] = [{"text":"impl UnwindSafe for ReturnFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AccountId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Hash","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EnvError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DefaultEnvTypes","synthetic":true,"types":[]},{"text":"impl&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; UnwindSafe for CallBuilder&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Callee: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;RetType: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;TransferredValue: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; UnwindSafe for CallParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as EnvTypes&gt;::AccountId: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as EnvTypes&gt;::Balance: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; UnwindSafe for CreateBuilder&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;CodeHash: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Endowment: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; UnwindSafe for CreateParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as EnvTypes&gt;::Balance: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as EnvTypes&gt;::Hash: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Args&gt; UnwindSafe for ExecutionInput&lt;Args&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Selector","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ReturnType&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Set&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Unset&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Head, Rest&gt; UnwindSafe for ArgumentList&lt;Head, Rest&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Head: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rest: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Argument&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ArgumentListEnd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CallData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ChainSpec","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EmittedEvent","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for DefaultAccounts&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as EnvTypes&gt;::AccountId: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sha2x256","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Keccak256","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Blake2x256","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Blake2x128","synthetic":true,"types":[]}];
implementors["ink_lang"] = [{"text":"impl&lt;'a, T&gt; UnwindSafe for EnvAccess&lt;'a, T&gt;","synthetic":true,"types":[]}];
implementors["ink_lang_ir"] = [{"text":"impl&lt;'a, C&gt; UnwindSafe for CallableWithSelector&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Constructor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Contract","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InkTest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InkTrait","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for InkTraitConstructor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for InkTraitMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for InputsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ItemImpl","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ItemMod","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for IterConstructors&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for IterEvents&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for IterInkTraitItems&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for IterItemImpls&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for IterMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Namespace","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Selector","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Storage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CallableKind","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImplItem","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InkItem","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for InkTraitItem&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Item","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Receiver","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Visibility","synthetic":true,"types":[]}];
implementors["ink_metadata"] = [{"text":"impl&lt;F&gt; UnwindSafe for ConstructorSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Selector&gt; UnwindSafe for ConstructorSpecBuilder&lt;Selector&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for ContractSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for ContractSpecBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for EventParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EventParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for EventSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EventSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for MessageParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MessageParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for MessageSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Selector, Mutates, IsPayable, Returns&gt; UnwindSafe for MessageSpecBuilder&lt;Selector, Mutates, IsPayable, Returns&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for ReturnTypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Selector","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for TypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InkProject","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LayoutKey","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for CellLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for HashLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe + UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HashingStrategy","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for ArrayLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe + UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for StructLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe + UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for FieldLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe + UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Discriminant","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for EnumLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe + UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for Layout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe + UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CryptoHasher","synthetic":true,"types":[]}];
implementors["ink_primitives"] = [{"text":"impl UnwindSafe for Key","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeyPtr","synthetic":true,"types":[]}];
implementors["ink_storage"] = [{"text":"impl&lt;T&gt; UnwindSafe for Box&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for Vec&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Lazy&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Memory&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Pack&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DynamicAllocation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContractPhase","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for BitStash","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Bitvec","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&nbsp;=&nbsp;Blake2x256&gt; !UnwindSafe for HashMap&lt;K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; UnwindSafe for SmallVec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ArrayLength&lt;CacheCell&lt;Option&lt;StorageEntry&lt;T&gt;&gt;&gt;&gt;&gt;::ArrayType: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for Stash&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BitRefMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ChunkRef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BitsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BitsIterMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !UnwindSafe for Iter&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !UnwindSafe for IterMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K&gt; !UnwindSafe for Keys&lt;'a, K&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !UnwindSafe for Values&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !UnwindSafe for ValuesMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !UnwindSafe for OccupiedEntry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !UnwindSafe for VacantEntry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !UnwindSafe for Entry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; !UnwindSafe for Iter&lt;'a, T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; !UnwindSafe for IterMut&lt;'a, T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VacantEntry","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Entry&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IndexOutOfBounds","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; UnwindSafe for LazyArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ArrayLength&lt;CacheCell&lt;Option&lt;StorageEntry&lt;T&gt;&gt;&gt;&gt;&gt;::ArrayType: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for LazyCell&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;V&gt; !UnwindSafe for LazyIndexMap&lt;V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&gt; !UnwindSafe for LazyHashMap&lt;K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !UnwindSafe for OccupiedEntry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !UnwindSafe for VacantEntry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !UnwindSafe for Entry&lt;'a, K, V&gt;","synthetic":true,"types":[]}];
implementors["scale_info"] = [{"text":"impl UnwindSafe for MetaType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Registry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RegistryReadOnly","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for TypeDefComposite&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Field&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Path&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for TypeDefVariant&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Variant&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Type&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for TypeDefArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for TypeDefTuple&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for TypeDefSequence&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for TypeDef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeDefPrimitive","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for TypeBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for FieldsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for VariantsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NoFields","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NamedFields","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnnamedFields","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Fields","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NoVariants","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VariantFields","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Fieldless","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Variants","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathNotAssigned","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathAssigned","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MetaForm","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CompactForm","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for UntrackedSymbol&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for Symbol&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Interner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()